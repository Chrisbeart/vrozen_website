import React from 'react';
import { Link } from 'react-router-dom';

const Anfahrt = () => {
  return (
    <div className="anfahrt">
      <h1>Anfahrt</h1>
      <Link to="/anfahrt-detail">Go to Anfahrt Detail</Link>
    </div>
  );
};

export default Anfahrt;
