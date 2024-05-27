import React from 'react';
import { Link } from 'react-router-dom';

const Bilder = () => {
  return (
    <div className="events">
      <h1>Events</h1>
      <Link to="/events-detail">Go to Events Detail</Link>
      <br />
      <Link to="/events-detail2">Go to Events Detail 2</Link>
    </div>
  );
};

export default Bilder;