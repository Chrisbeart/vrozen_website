import React from 'react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="impressum">
      <h1>Impressum</h1>
      <Link to="/impressum-detail">Go to Impressum Detail</Link>
    </div>
  );
};

export default Impressum;
