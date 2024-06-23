import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VehicleForm from '../components/VehicleForm';

test('renders VehicleForm component', () => {
  const onSubmit = jest.fn();
  
  render(<VehicleForm onSubmit={onSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Vehicle' } });
  fireEvent.change(screen.getByLabelText(/model/i), { target: { value: 'Test Model' } });
  fireEvent.click(screen.getByText(/submit/i));
  
  expect(onSubmit).toHaveBeenCalledWith({ name: 'Test Vehicle', model: 'Test Model' });
});
