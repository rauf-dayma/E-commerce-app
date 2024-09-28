// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="back-home">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
