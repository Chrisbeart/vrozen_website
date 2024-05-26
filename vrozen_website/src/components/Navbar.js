import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/events">Events</Link>
      <Link to="/kurse">Kurse</Link>
      <Link to="/bilder">Bilder</Link>
      <Link to="/unsere-pferde">Unsere Pferde</Link>
    </nav>
  );
};

export default Navbar;
