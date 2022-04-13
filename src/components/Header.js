import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        
    <Navbar bg="warning" variant="dark">
     <Container>
       <Nav className="me-auto">
        <Link to = "/" className="nav-link">Home</Link>
        <Link to = "/users" className="nav-link">Users</Link>
        <Link to = "/users/new" className="nav-link">Add user</Link>
       </Nav>
     </Container>
  </Navbar>
    )
}
