import React, { useState, useEffect } from "react";

export default function Weather() {
  let [weatherData, setWeatherData] = useState([]);

  useEffect(async () => {
    const url = "https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576";
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data.result);
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-heading">THE WEATHER CHANNEL</div>
      <div className="weather-body">
        {weatherData.map((item, index) => {
          return (
            <div
              className={
                index === 0
                  ? "weather-icons first"
                  : index === 1
                  ? "weather-icons second"
                  : index === 2
                  ? "weather-icons third"
                  : "weather-icons fourth"
              }
              key={index}
            >
              <div className="weather-city">{item.city}</div>
              <img src=".\images\icon-party-sunny.svg" />
              <p className="weather-temp">{item.temp_Celsius}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
