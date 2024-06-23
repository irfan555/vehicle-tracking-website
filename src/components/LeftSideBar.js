// LeftSideBar.js
import React from 'react';

const LeftSideBar = ({ vehicles, onSelectVehicle }) => {
  return (
    <div className="sidebar">
      <h3>Vehicles</h3>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle._id}>
            <button className="vehicle-button" onClick={() => onSelectVehicle(vehicle._id)}>
              {vehicle.name} - {vehicle.model}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
