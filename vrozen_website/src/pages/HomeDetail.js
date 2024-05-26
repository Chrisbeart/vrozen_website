import React from 'react';
import { Link } from 'react-router-dom';

const HomeDetail = () => {
  return (
    <div className="home-detail">
      <h1>Home Detail</h1>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default HomeDetail;
