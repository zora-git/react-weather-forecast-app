import react from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function description() {
    let description = props.data.weather[0].description;
    return `${description}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-date"> {day()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="forecast-detail">
        <div className="forecast-temps">
          <span className="forecast-max-temp"> {maxTemperature()} </span>{" "}
          <span className="forecast-min-temp">{minTemperature()}</span>
        </div>
        <div className="forecast-description"> {description()} </div>
      </div>
    </div>
  );
}
