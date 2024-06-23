import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header component', () => {
  const vehicles = [{ _id: '1', name: 'Vehicle 1' }];
  const onFilterChange = jest.fn();
  
  render(<Header vehicles={vehicles} selectedVehicleId="1" onFilterChange={onFilterChange} />);
  
  expect(screen.getByText(/Vehicle 1/i)).toBeInTheDocument();
  
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
  expect(onFilterChange).toHaveBeenCalledWith('1');
});
