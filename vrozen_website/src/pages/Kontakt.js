// src/pages/Kontakt.js
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import './Kontakt.css'; // Importiere die CSS-Datei

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <h1>Kontakt</h1>
      <div className="kontakt-content">
        <div className="form-container">
          <ContactForm />
          <p className="form-text">Bitte füllen Sie das Formular aus, um uns zu kontaktieren.</p>
        </div>
        <div className="map-container">
          <iframe title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2573130090404!2d6.620470977034134!3d51.526840171817796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8978fd0da02a9%3A0x1ce2b032844eb0c6!2sIsabell%20Werth!5e0!3m2!1sde!2sde!4v1716812353387!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <p className="map-text">Hier finden Sie uns auf der Karte.</p>
        </div>
      </div>
      <Link to="/kontakt-detail">Go to Kontakt Detail</Link>
    </div>
  );
};

export default Kontakt;
