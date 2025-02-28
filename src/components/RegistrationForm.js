import React, { useState } from "react";

const RegistrationForm = ({ setName, handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  
    if (name === "name") {
      setName(value);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Login to your account</h2>

      <label>Name *</label>
      <input
        type="text"
        name="name"
        placeholder="Input your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Phone *</label>
      <input
        type="tel"
        name="phone"
        placeholder="Input your phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label>Email *</label>
      <input
        type="email"
        name="email"
        placeholder="Input your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Password *</label>
      <input
        type="password"
        name="password"
        placeholder="Input your password account"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default RegistrationForm;