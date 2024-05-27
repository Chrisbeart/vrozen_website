import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bilder.css'

const Bilder = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const images = [
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',
    'https://www.ehorses.de/magazin/wp-content/uploads/mustang-pferderasse.jpg',

  ];

  return (
    <div className="wrapper">
      <div className="bilder">
        <h1>Bilder</h1>
        <Link to="/bilder-detail">Go to Bilder Detail</Link>
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
  );
};

export default Bilder;