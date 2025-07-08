import './Form.css';

import { useState } from 'react';

const Form = () => {
  const [formElement, setFormElement] = useState({
    firstName: "",
    lastName: "",
  });
  const [showFullName, setShowFullName] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormElement((prev) => ({ ...prev, [name]: value }));
    setShowFullName(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFullName(true);
  };

  return (
    <div className="form">
      <h1 className="form-heading">Full Name Display</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formElement.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formElement.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {showFullName && (
        <p className="result">{`Full Name: ${formElement.firstName} ${formElement.lastName}`}</p>
      )}
    </div>
  );
};

export default Form;
