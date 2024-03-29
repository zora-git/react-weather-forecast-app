import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="card">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="card">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="card">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="card">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="card">
          <WeatherForecastDay data={forecast[5]} />
        </div>
        <div className="card">
          <WeatherForecastDay data={forecast[6]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
