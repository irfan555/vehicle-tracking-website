import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import VehicleList from './components/VehicleList';
import VehicleForm from './components/VehicleForm';
import MapPage from './components/MapPage';
import './styles/App.css'; // Import the CSS file

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [vehicleRoutes, setVehicleRoutes] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    if (selectedVehicleId) {
      fetchVehicleLocationsForDay(selectedVehicleId, new Date().toISOString().slice(0, 10));
    }
  }, [selectedVehicleId]);

  const baseURL = process.env.REACT_APP_BASE_URL;

  const fetchVehicles = async () => {
    try {
      const response = await axios.get(`${baseURL}/fetchVehicles`);
      setVehicles(response.data);
      if (response.data.length > 0) {
        setSelectedVehicleId(response.data[0]._id);
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const fetchVehicleLocationsForDay = async (vehicleId, date) => {
    try {
      const response = await axios.get(
        `${baseURL}/fetchVehicleLocationsForDay?vehicleId=${vehicleId}&date=${date}`
      );
      const routes = response.data.map(loc => ({
        vehicleId: loc.vehicleId,
        path: [{ lat: loc.latitude, lng: loc.longitude }]
      }));
      setVehicleRoutes(routes);
    } catch (error) {
      console.error('Error fetching vehicle locations:', error);
    }
  };

  const handleAddVehicle = async (formData) => {
    try {
      await axios.post(`${baseURL}/createVehicle`, formData);
      fetchVehicles();
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  const handleUpdateVehicle = async (vehicleId, formData) => {
    try {
      await axios.put(`${baseURL}/updateVehicle/${vehicleId}`, formData);
      fetchVehicles(); // Update vehicle list after successful update
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header vehicles={vehicles} selectedVehicleId={selectedVehicleId} onFilterChange={setSelectedVehicleId} />
        <Routes>
          <Route
            path="/map"
            element={<MapPage vehicles={vehicles} selectedVehicleId={selectedVehicleId} vehicleRoutes={vehicleRoutes} fetchVehicleLocationsForDay={fetchVehicleLocationsForDay} />}
          />
          <Route path="/list" element={<VehicleList vehicles={vehicles} />} />
          <Route
            path="/update/:id"
            element={
              <VehicleForm
                initialValues={vehicles.find((vehicle) => vehicle._id === selectedVehicleId)}
                onSubmit={(formData) => handleUpdateVehicle(selectedVehicleId, formData)}
              />
            }
          />
          <Route path="/add" element={<VehicleForm onSubmit={handleAddVehicle} />} />
          <Route path="*" element={<Navigate to="/map" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
