import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col md={3}>
            <h5><i className="bi bi-play-circle-fill"></i> Media-Player</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
          </Col>

          <Col md={3}>
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>Landing Page</li>
              <li>Home Page</li>
              <li>Watch History</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6>Guides</h6>
            <ul className="list-unstyled">
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6>Contact Us</h6>
            <Form className="d-flex flex-column flex-sm-row align-items-center gap-2">
                <Form.Control 
                type="email" 
                placeholder="Enter your Email ID" 
                aria-label="Email address"
                className="w-100 w-sm-auto py-1 px-2"
                style={{ maxWidth: "200px", fontSize: "0.9rem" }}
                />
                <Button variant="warning" className="px-3 py-1">
                    Subscribe
                </Button>
            </Form>

            <div className="mt-3 d-flex gap-3">
              <FaInstagram size={20} />
              <FaTwitter size={20} />
              <FaLinkedin size={20} />
              <FaFacebook size={20} />
            </div>
          </Col>
        </Row>
        <hr className="bg-light mt-4" />
        <p className="text-center mb-0">© 2025 Media Player. Built with React.</p>
      </Container>
    </footer>
  );
}

export default Footer;
