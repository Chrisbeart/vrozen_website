import React from 'react';
import './Banner.css';
import bannerImage from '../assets/images/banner.jpg';  // Pfad zum Bild

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>Title Banner</h1>
      <p>Some Name</p>
    </div>
  );
};

export default Banner;
