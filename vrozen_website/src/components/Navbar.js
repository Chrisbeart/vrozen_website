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
      <Link to="/anfahrt">Anfahrt</Link>
    </nav>
  );
};

export default Navbar;
