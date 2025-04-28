import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ color: 'blue', fontWeight: '20px' }}>
              <i className="fa-solid fa-play fa-beat me-2"></i>
              Media-Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
