import React from 'react';
import { Link } from 'react-router-dom';

const Kontakt = () => {
  return (
    <div className="kontakt">
      <h1>Kontakt</h1>
      <Link to="/kontakt-detail">Go to Kontakt Detail</Link>
    </div>
  );
};

export default Kontakt;
