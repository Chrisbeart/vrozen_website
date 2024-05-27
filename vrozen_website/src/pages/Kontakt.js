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
          <div className="info-container">
            <h2 className="oeffi">So kannst du uns mit Bus und Bahn erreichen:</h2>
            <p className="form-text">Bus: SB30, 68 ,34</p>
            <p className="form-text">Bahn: RB31</p>
            <p className="form-text">Haltestelle : Am Pferde Hof</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.8413912437903!2d11.181192803969989!3d47.87740276097242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dcaf5f08cad95%3A0x73d4894f08d34619!2sAlte%20M%C3%BCnchner%20Str.%2015%2C%2082407%20Wielenbach!5e0!3m2!1sde!2sde!4v1716825559949!5m2!1sde!2sde"
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
