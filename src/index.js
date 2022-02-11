import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
