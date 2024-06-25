import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoImage from "../images/424906607_371211172391747_2532641992234494639_n.jpg";

function CollapsibleExample() {
  return (
    <div>
      <Navbar expand="lg" fixed="top" style={{ background:"black" }}>
        <Container>
          <Navbar.Brand href="/">
            <Image src={logoImage} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} size="2x" style={{ color: "white" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="/" className="text-white nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white nav-link">
                About Us
              </Nav.Link>
              <Nav.Link href="#portfolio" className="text-white nav-link">
                Gallery
              </Nav.Link>
              <Nav.Link href="#events" className="text-white nav-link">
                Events
              </Nav.Link>
              <Nav.Link href="#team" className="text-white nav-link">
                Team
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white nav-link">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
