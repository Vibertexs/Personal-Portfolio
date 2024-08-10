import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './NavbarComponent.css'; // Import custom CSS

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="navbar-font">BILAL KHAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#about" className="navbar-font">ABOUT</Nav.Link>
          <Nav.Link href="#experience" className="navbar-font">EXPERIENCE</Nav.Link>
          <Nav.Link href="#projects" className="navbar-font">PROJECTS</Nav.Link>
          <Nav.Link href="#resume" className="navbar-font">RESUME</Nav.Link>
          <Nav.Link href="mailto:youremail@example.com" className="navbar-font connect-link popout">CONNECT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
