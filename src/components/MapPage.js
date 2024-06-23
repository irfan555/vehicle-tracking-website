import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import Loader from './Loader'; // Assume Loader component exists

const MapPage = ({ vehicles, selectedVehicleId, fetchVehicleLocationsForDay }) => {
  const [vehicleRoutes, setVehicleRoutes] = useState([]);
  const [loading, setLoading] = useState(false); // State for loader
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (selectedVehicleId) {
      fetchVehicleLocations(selectedVehicleId, new Date().toISOString().slice(0, 10));
    }
  }, [selectedVehicleId]);

  const fetchVehicleLocations = async (vehicleId, date) => {
    setLoading(true); // Start loader
    try {
      const response = await axios.get(
        `${baseURL}/fetchVehicleLocationsForDay?vehicleId=${vehicleId}&date=${date}`
      );
      const routes = response.data.map(loc => ({
        vehicleId: loc.vehicleId,
        path: { lat: loc.latitude, lng: loc.longitude }
      }));
      setVehicleRoutes(routes);
    } catch (error) {
      console.error('Error fetching vehicle locations:', error);
    } finally {
      setLoading(false); // Stop loader, whether successful or error
    }
  };

  return (
    <div className="main">
      <div className="left-section">
        <h3>Vehicle List</h3>
        <ul className="sidebar">
          {vehicles.map(vehicle => (
            <li key={vehicle._id}>
              <button
                className={`vehicle-button ${selectedVehicleId === vehicle._id ? 'selected' : ''}`}
                onClick={() => fetchVehicleLocationsForDay(vehicle._id, new Date().toISOString().slice(0, 10))}
              >
                {vehicle.name} - {vehicle.model}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-section">
        {loading && <Loader />} {/* Loader component displayed when loading is true */}
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: 'calc(100vh - 60px)' }}
            center={vehicleRoutes.length > 0 ? vehicleRoutes[0].path : { lat: 0, lng: 0 }}
            zoom={14}
          >
            {vehicleRoutes.length > 0 && (
              <Polyline
                path={vehicleRoutes.map(route => route.path)}
                options={{ strokeColor: '#FF0000' }}
              />
            )}
            {vehicleRoutes.length > 0 && (
              <>
                <Marker position={vehicleRoutes[0].path} />
                <Marker position={vehicleRoutes[vehicleRoutes.length - 1].path} />
              </>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapPage;
