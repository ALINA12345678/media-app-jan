import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function Watchhistory() {
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    const result = await getHistoryAPI();
    if (result.status === 200) {
      setHistory(result.data);
    } else {
      console.log("API FAILED");
      setHistory([]);
    }
  };

  const removeHistory = async (id) => {
    await deleteHistoryAPI(id);
    getHistory();
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-between mt-5">
        <h1 className="text-info">WatchHistory</h1>
        <Link 
          to={"/home"} 
          style={{ textDecoration: "none", color: "blueviolet", fontSize: "30px" }}
        >
          Back to Home <i className="fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse"></i>
        </Link>
      </div>

      <table className='container shadow mt-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>Video Title</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history.length > 0 ? history.map((video, index) => (
              <tr key={video.id}>
                <td className="text-warning">{index + 1}</td>
                <td className="fw-bolder">{video.title}</td>
                <td>
                  <a href={video.link} target="_blank" rel="noreferrer">{video.link}</a>
                </td>
                <td>{video.timeStamp}</td>
                <td>
                  <button 
                    className="btn btn-link" 
                    onClick={() => removeHistory(video.id)}
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="text-center">
                  <p className="text-danger fw-bolder">Nothing To Display</p>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Watchhistory;
