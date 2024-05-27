// src/pages/Uebermich.js
import React from 'react';
import  './Uebermich.css'; // Importiere die CSS-Datei


const Uebermich = () => {
  return (
    <div className="über-mich-container">
      <h1>Über Mich</h1>
      <div className="content">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Profilbild"
            className="profilbild"
          />
        </div>
        <div className="text-container">
          <p className="vorstellungstext">
            Herzlich willkommen auf meiner Über-mich-Seite! Mein Name ist Max
            Mustermann und ich bin ein begeisterter Entwickler aus Musterstadt.
            Seit meiner Kindheit interessiere ich mich für das Programmieren und
            habe in den letzten Jahren an vielen spannenden Projekten
            mitgewirkt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uebermich;
