import React, { useState } from "react";
import { Watch } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "b40b135798f82a05aed08769f9275f50";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="weather-app">
          <form onSubmit={handleSubmit} className="form">
            <div className="row">
              <div className="col-9 search-box">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3 d-none d-md-block">
                <input
                  type="submit"
                  value="Search"
                  className="d-none d-md-block search"
                />
              </div>
              <div className="col-3 d-md-none search-icon-container">
                <a href="/" onClick={handleSubmit}>
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </a>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="rgba(255, 255, 255, 0.5)"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
