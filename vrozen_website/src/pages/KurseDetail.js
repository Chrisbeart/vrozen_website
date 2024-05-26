import React from 'react';
import { Link } from 'react-router-dom';

const KurseDetail = () => {
  return (
    <div className="kurse-detail">
      <h1>Kurse Detail</h1>
      <Link to="/kurse">Go Back to Kurse</Link>
    </div>
  );
};

export default KurseDetail;
