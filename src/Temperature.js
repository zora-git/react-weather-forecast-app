import React from "react";

export default function Temperature(props) {
  return (
    <div class="row ">
      <div className="col-9 main-temp">{Math.round(props.celcius)}</div>
      <div className="col-3 unit">
        <div className="row celcius">°C</div>
      </div>
    </div>
  );
}
