import React, { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import "./WeatherPage.css";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [userName, setUserName] = useState("Guest"); // default - 'Guest'

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("userData");

    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        console.log("Retrieved userData:", parsedData); 
        setUserName(parsedData.name || "Guest"); 
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    } else {
      console.warn("No userData found in localStorage");
    }

    // Fetch weather data
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f9d7caa1b6045dfb5b2e67007aa2923f`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-page">
      <header className="navbar">
        <h1 className="logo">
          <span className="asterisk">*</span> Weather App
        </h1>
        <div className="profile">
          <div className="profile-pic">P</div>
          <span className="dropdown-icon">▼</span>
        </div>
      </header>

      <div className="content">
        <h2 className="greeting">Good Morning, {userName}!</h2>
        <p className="subtext">Here is the weather update for you</p>

        {weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
