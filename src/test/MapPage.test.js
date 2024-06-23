import React from 'react';
import { render, screen } from '@testing-library/react';
import MapPage from '../components/MapPage';
import { LoadScript } from '@react-google-maps/api';

jest.mock('@react-google-maps/api', () => ({
  LoadScript: jest.fn(({ children }) => <div>{children}</div>),
  GoogleMap: jest.fn(({ children }) => <div>{children}</div>),
  Polyline: jest.fn(() => <div>Polyline</div>),
  Marker: jest.fn(() => <div>Marker</div>)
}));

test('renders MapPage component', () => {
  const vehicles = [{ _id: '1', name: 'Vehicle 1', model: 'Model 1' }];
  const fetchVehicleLocationsForDay = jest.fn();
  
  render(
    <MapPage 
      vehicles={vehicles}
      selectedVehicleId="1"
      fetchVehicleLocationsForDay={fetchVehicleLocationsForDay}
    />
  );
  
  expect(screen.getByText(/Vehicle List/i)).toBeInTheDocument();
  expect(screen.getByText(/Vehicle 1 - Model 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Polyline/i)).toBeInTheDocument();
  expect(screen.getByText(/Marker/i)).toBeInTheDocument();
});
