import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, getCategoryAPI, deleteCategoryAPI, getAVideoAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from '../Components/Videocard';

function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] });

      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories(); // Refresh the list after adding
      } else {
        console.log(result.message);
      }
    } else {
      alert("Please fill the field");
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await getCategoryAPI();
      setAllCategories(data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    const { data } = await getAVideoAPI(videoId);
    const selectedCategory = allCategories.find(item => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    const res = await updateCategoryAPI(categoryId, selectedCategory);
    getCategories();
  };
  const videoDragStarted = (e,videoId, categoryId) => {
    let dataShare = { videoId, categoryId };
    //console.log(dataShare);
    e.dataTransfer.setData("data", JSON.stringify(dataShare));

  }
  

  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  return (
    <div className="container py-4">
      <div className="d-grid mb-3">
        <Button variant="info" onClick={handleShow}>Add Category</Button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Category name"
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Display Categories */}
      {allCategories?.length > 0 ? (
        allCategories.map(category => (
          <div 
            key={category.id} 
            className="border rounded p-3 m-3" 
            droppable="true" 
            onDragOver={dragOver}
            onDrop={(e) => videoDrop(e, category?.id)} 
          >
            <div className="d-flex justify-content-between align-items-center">
              <h4>{category?.categoryName}</h4>
              <button className="btn btn-link" onClick={() => removeCategory(category?.id)}>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>

            <Row className="mt-3">
              {category?.allVideos.length > 0 ? category?.allVideos.map(card => (
                <Col key={card.id} sm={12} md={6} lg={4} className="mb-3" draggable onDragStart={e => videoDragStarted(e, card.id, category.id)}
>
                  <Videocard video={card} insideCategory={true}/>
                </Col>
              )) : <p className="text-muted">No videos available</p>}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger fw-bolder">Nothing To Display</p>
      )}
    </div>
  );
}

export default Category;
