import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/navigation.css'; // Custom CSS file
import logo from '../assets/images/Bard_Generated_Image (1).jpg';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="my-custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
		<img 
            src={logo} // Use the imported image variable
            alt="Friendship Connection Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"  
          />
		Friendship Connections</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Find Friends</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
