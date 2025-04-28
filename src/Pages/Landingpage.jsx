import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landingpage() {
    const navigateByUrl=useNavigate()
  return (
    <div>
        <Row className="mt-5 d-flex align-items-center justify-content-between w-100">
            <Col></Col>
            <Col lg={5}>
                <h1 style={{ color: 'blueviolet', fontSize: '40px' }}>
                    Welcome to <span className="text-warning">Media-Player</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam
                    mollitia! Velit a nobis exercitationem debitis. Iure distinctio, facilis
                    reiciendis accusamus unde accusantium recusandae temporibus? Temporibus quos
                    blanditiis molestias cumque?
                </p>
                <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
            </Col>

            <Col lg={5}>
                <img src="https://media.tenor.com/GfSX-u7VGM4AAAAC/cat-jam.gif
" alt="" />
            </Col>

            <Col></Col>
        </Row>
        <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5 className="text-warning" style={{ fontSize: "40px" }}>
        Features
        </h5>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width={'300px'} height={'300px'} src="https://gifdb.com/images/high/neon-color-spiral-nest-pvc4vtuedyroxnys.gif" />
        <Card.Body>
            <Card.Title>Mangaing videos</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width={'300px'} height={'300px'} src="https://4.bp.blogspot.com/-Kb3qeBLTx_0/Vk9T_fjuj-I/AAAAAAAARwo/6BV1DuT2VDU/s1600/A%2BEsfera.gif" />

        <Card.Body>
            <Card.Title>Categorised video</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width={'300px'} height={'300px'} src="https://media.tenor.com/ukFVmF_oEKYAAAAM/radial-pattern-implode-radial.gif" />
        <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
        </div>


        </div>
        <div className="container border border-dark rounded p-4 mt-5 d-flex justify-content-center align-items-center">

            <div className="col-lg-5">
            <h4 className='text-warning'>Simple,Powerful & Fast</h4>
            <h6 className='mb-5 mt-4'> <span className='text-warning'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum libero ipsum doloribus deleniti veniam ullam similique ratione repudiandae, deserunt repellendus, unde ex at, esse aut nostrum ut. Distinctio, ducimus.</h6>
            <h6 className='mb-5 mt-4'> <span className='text-warning'>Categorize Videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum libero ipsum doloribus deleniti veniam ullam similique ratione repudiandae, deserunt repellendus, unde ex at, esse aut nostrum ut. Distinctio, ducimus.</h6>
            <h6 className='mb-5 mt-4'> <span className='text-warning'>Managing Videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum libero ipsum doloribus deleniti veniam ullam similique ratione repudiandae, deserunt repellendus, unde ex at, esse aut nostrum ut. Distinctio, ducimus.</h6>

            </div>

            <div className="col-lg-5 ms-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/P0THJKBIxhs?si=eS2LERLGZTaQH2GO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
             
            </div>

        </div>

    </div>
  )
}

export default Landingpage
