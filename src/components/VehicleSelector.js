// src/components/VehicleSelector.js
import React from 'react';

const VehicleSelector = ({ vehicles, selectedVehicle, onSelect }) => (
  <div>
    <label>Select Vehicle: </label>
    <select value={selectedVehicle} onChange={e => onSelect(e.target.value)}>
      <option value="">Select a vehicle</option>
      {vehicles.map(vehicle => (
        <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
      ))}
    </select>
  </div>
);

export default VehicleSelector;
