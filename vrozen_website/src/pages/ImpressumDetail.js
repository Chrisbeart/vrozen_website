import React from 'react';
import { Link } from 'react-router-dom';

const ImpressumDetail = () => {
  return (
    <div className="impressum-detail">
      <h1>Impressum Detail</h1>
      <Link to="/impressum">Go Back to Impressum</Link>
    </div>
  );
};

export default ImpressumDetail;
