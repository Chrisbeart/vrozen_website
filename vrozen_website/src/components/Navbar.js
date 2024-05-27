import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const MyNavbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target;
      if (anchor.hash !== "") {
        event.preventDefault();
        const hash = anchor.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('a.page-scroll');
    anchors.forEach(anchor => anchor.addEventListener('click', handleClick));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <Navbar fixed="top" className="navbar-transparent" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="page-scroll">HOME</Nav.Link>
          <Nav.Link as={Link} to="/kontakt" className="page-scroll">Kontakt</Nav.Link>
          <NavDropdown 
            title="Events" 
            id="basic-nav-dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            show={showSubMenu}
          >
            <NavDropdown.Item as={Link} to="/events/event1" className="page-scroll">Event 1</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/events/event2" className="page-scroll">Event 2</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/kurse" className="page-scroll">Kurse</Nav.Link>
          <Nav.Link as={Link} to="/bilder" className="page-scroll">Bilder</Nav.Link>
          <Nav.Link as={Link} to="/unsere-pferde" className="page-scroll">Unsere Pferde</Nav.Link>
          <Nav.Link as={Link} to="/impressum" className="page-scroll">Impressum</Nav.Link>
          <Nav.Link as={Link} to="/ueber-mich" className="page-scroll">Über mich</Nav.Link> {/* Neuer Link */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
