import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import "../styles/Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("name", name); 
    navigate("/weather");  
  };

  return (
    <div className="registration-container">
      <div className="image-section"></div>
      <div className="form-section">
        <RegistrationForm setName={setName} handleSubmit={handleSubmit} /> 
        
      </div>
    </div>
  );
};

export default Registration;