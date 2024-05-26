import React from 'react';
import { Link } from 'react-router-dom';

const AnfahrtDetail = () => {
  return (
    <div className="anfahrt-detail">
      <h1>Anfahrt Detail</h1>
      <Link to="/anfahrt">Go Back to Anfahrt</Link>
    </div>
  );
};

export default AnfahrtDetail;
