import React from "react";
import "./styles.css";
import Form from "./Form";
import CurrentDay from "./CurrentDay";
import WeekForecast from "./WeekForecast";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <Form />
        <h1>San Diego</h1>
        <div className="row">
          <div className="col-6 current-day">
            <CurrentDay />
          </div>
          <div className="col-6 current-day">
            <WeekForecast />
          </div>
        </div>
        <div className="codelink">
          <a
            href="https://github.com/Onlygirlintown/my-app"
            target="_blank"
            className="source-link"
            rel="noreferrer"
          >
            Open Source Code by Alexandra Chitacapa
          </a>
        </div>
      </div>
    </div>
  );
}
