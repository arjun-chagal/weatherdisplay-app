import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const temperature = weather?.main?.temp ? Math.round(weather.main.temp) : "--";
  return (
    <div className="weather-card">
      <div className="weather-content">
        <div className="weather-icon">
          <div className="sun"></div>
          <div className="cloud"></div>
        </div>
        <div className="temperature">
          {temperature} <span className="degree">°</span>C
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;