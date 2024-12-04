import './Form.css';

import React, { useState } from 'react';

const Form = () => {
  const [formElement, setFormElement] = useState({
    firstName: "",
    lastName: "",
  });
  const [showFullName, setShowFullName] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormElement({ ...formElement, [name]: value });
    setShowFullName(false);
  };
  return (
    <div className="form">
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowFullName(true);
        }}
      >
        <div style={{margin:'3rem'}}>
          
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formElement.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{margin:'3rem'}}>
          <label htmlFor="lastName">Last Name</label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formElement.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {showFullName && (
        <h5>{`Full Name: ${formElement.firstName} ${formElement.lastName}`}</h5>
      )}
    </div>
  );
};

export default Form;
