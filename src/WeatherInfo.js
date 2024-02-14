import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>

      <div className="row details">
        <div className="col-md-6 main-column">
          <div className="row main-section">
            <div className="col-md-6 icon-column">
              <div className="main-icon">
                <WeatherIcon code={props.data.icon} width={100} height={100} />
              </div>
            </div>

            <div className="col-6 temp-column">
              <Temperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-md-6 description-column">
          <h4 className="text-capitalize">{props.data.description}</h4>
          <ul className="description-list">
            <li>Visibility: {props.data.visibility / 1000} km</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
