import React from 'react';
import { Link } from 'react-router-dom';

const BilderDetail = () => {
  return (
    <div className="bilder-detail">
      <h1>Bilder Detail</h1>
      <Link to="/bilder">Go Back to Bilder</Link>
    </div>
  );
};

export default BilderDetail;
