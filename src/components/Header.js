import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/vehicle-tracker-logo-white.webp'; // Adjust the path as needed

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Vehicle Tracker Logo" className="header-logo" />
      </div>
      <div className="header-center">
        <Link to="/map" className="header-link">Home</Link>
        <Link to="/list" className="header-link">List Vehicles</Link>
        <Link to="/add" className="header-link">Add Vehicles</Link>
      </div>
    </div>
  );
};

export default Header;
