import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Seoul" />
    </div>
  );
}

export default App;
