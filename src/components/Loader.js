// src/components/Loader.js

import React from 'react';
import '../styles/Loader.css'; // Import CSS file for styling

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
