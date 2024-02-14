import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://hjp-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          HJ Park
        </a>{" "}
        and is {""}
        <a
          href="https://github.com/zora-git/react-weather-forecast-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github.
        </a>
      </footer>
    </div>
  );
}
