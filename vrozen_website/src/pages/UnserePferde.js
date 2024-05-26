import React from 'react';
import { Link } from 'react-router-dom';
import './UnserePferde.css';
import horseImage from '../assets/images/horse.jpg'; // Beispielbild

const UnserePferde = () => {
  return (
    <div className="unsere-pferde">
      <h1>Unsere Pferde</h1>
      <div className="horse-gallery">
        <div className="horse-card">
          <Link to="/unsere-pferde1">
            <img src={horseImage} alt="Unsere Pferde 1" />
            <p>Unsere Pferde 1</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde2">
            <img src={horseImage} alt="Unsere Pferde 2" />
            <p>Unsere Pferde 2</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde3">
            <img src={horseImage} alt="Unsere Pferde 3" />
            <p>Unsere Pferde 3</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde4">
            <img src={horseImage} alt="Unsere Pferde 4" />
            <p>Unsere Pferde 4</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde5">
            <img src={horseImage} alt="Unsere Pferde 5" />
            <p>Unsere Pferde 5</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde6">
            <img src={horseImage} alt="Unsere Pferde 6" />
            <p>Unsere Pferde 6</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde7">
            <img src={horseImage} alt="Unsere Pferde 7" />
            <p>Unsere Pferde 7</p>
          </Link>
        </div>
        <div className="horse-card">
          <Link to="/unsere-pferde8">
            <img src={horseImage} alt="Unsere Pferde 8" />
            <p>Unsere Pferde 8</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnserePferde;
