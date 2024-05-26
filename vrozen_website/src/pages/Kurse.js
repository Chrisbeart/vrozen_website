import React from 'react';
import { Link } from 'react-router-dom';

const Kurse = () => {
  return (
    <div className="kurse">
      <h1>Kurse</h1>
      <Link to="/kurse-detail">Go to Kurse Detail</Link>
      <br />
      <Link to="/kurse-detail2">Go to Kurse Detail 2</Link>
    </div>
  );
};

export default Kurse;
