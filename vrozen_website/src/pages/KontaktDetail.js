import React from 'react';
import { Link } from 'react-router-dom';

const KontaktDetail = () => {
  return (
    <div className="kontakt-detail">
      <h1>Kontakt Detail</h1>
      <Link to="/kontakt">Go Back to Kontakt</Link>
    </div>
  );
};

export default KontaktDetail;
