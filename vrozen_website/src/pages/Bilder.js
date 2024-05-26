import React from 'react';
import { Link } from 'react-router-dom';

const Bilder = () => {
  return (
    <div className="bilder">
      <h1>Bilder</h1>
      <Link to="/bilder-detail">Go to Bilder Detail</Link>
    </div>
  );
};

export default Bilder;
