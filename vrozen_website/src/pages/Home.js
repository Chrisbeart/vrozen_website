import React, { useState } from 'react';
import './Home.css';
import image1 from '../assets/images/bilder/1.jpg';
import image2 from '../assets/images/bilder/2.jpg';
import image3 from '../assets/images/bilder/3.jpg';
import image4 from '../assets/images/bilder/4.jpg';
import image5 from '../assets/images/bilder/5.jpg';
import image6 from '../assets/images/bilder/6.jpg';
import image7 from '../assets/images/bilder/7.jpg';
import image8 from '../assets/images/bilder/8.jpg';
import image9 from '../assets/images/bilder/9.jpg';

const Bilder = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <div className="background-container">
      <div className="wrapper">
        <div className="bilder">
          <h1>Home Sweet Home</h1>
          <div className="items">
            {images.map((src, index) => (
              <div
                key={index}
                className={`item ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => handleImageClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bilder;
