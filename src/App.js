import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import WeatherPage from "./pages/WeatherPage"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/weather" element={<WeatherPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;