import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleList from '../components/VehicleList';

test('renders VehicleList component', () => {
  const vehicles = [{ _id: '1', name: 'Vehicle 1', model: 'Model 1' }];
  
  render(<VehicleList vehicles={vehicles} />);
  
  expect(screen.getByText(/Vehicle 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Model 1/i)).toBeInTheDocument();
});
