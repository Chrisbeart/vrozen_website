import React from 'react';
import { Link } from 'react-router-dom';

const EventsDetail = () => {
  return (
    <div className="events-detail">
      <h1>Events Detail</h1>
      <Link to="/events">Go Back to Events</Link>
    </div>
  );
};

export default EventsDetail;
