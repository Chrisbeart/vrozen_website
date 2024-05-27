import React from 'react';
import { Link } from 'react-router-dom';

const Kurse = () => {
  return (
    <div className="kurse">
      <h1>Kurse</h1>
      <Link to="/kurse-detail">anstehende Kurse</Link>
      <br />
      <Link to="/kurse-detail2">vergangene Kurse</Link>
    </div>
  );
};

export default Kurse;
