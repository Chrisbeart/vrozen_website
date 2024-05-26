import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="events">
      <h1>Events</h1>
      <Link to="/events-detail">Go to Events Detail</Link>
    </div>
  );
};

export default Events;
