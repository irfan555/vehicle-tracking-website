import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VehicleList.css'; // Import the CSS file

const VehicleList = ({ vehicles }) => {
  return (
    <div className="vehicle-list-container">
      <h2>List of Vehicles</h2>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.name}</td>
              <td>{vehicle.model}</td>
              <td>
                <Link to={`/update/${vehicle._id}`} className="update-link">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
