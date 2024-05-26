import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Title Banner</h1>
        <p>Some Name</p>
      </div>
      <Link to="/home-detail">Go to Home Detail</Link>
    </div>
  );
};

export default Home;
