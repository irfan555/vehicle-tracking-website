import React, { useState } from 'react';
import '../styles/VehicleForm.css'; // Import the CSS file

const VehicleForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [model, setModel] = useState(initialValues?.model || '');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, model };
    await onSubmit(formData);
  };

  return (
    <div className="vehicle-form-container">
      <h2>{initialValues ? 'Update Vehicle' : 'Add Vehicle'}</h2>
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          {initialValues ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
