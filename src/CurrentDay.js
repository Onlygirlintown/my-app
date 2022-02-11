import React from "react";

export default function CurrentDay() {
  return (
    <div>
      <div class="row">
        <span className="degree-units"></span>
        <div className="current-day current-day-temperature">70°</div>
      </div>

      <li className="">
        <img
          src="https://www.flaticon.com/free-icon/sun_169367"
          alt="sun emoji"
          width="100"
        />
      </li>
      <li className="current-day current-weekday">Sunday</li>
      <li className="current-day current-weekday-stats">4:00PM</li>
      <li className="current-day current-weekday-stats">weather</li>
      <li className="current-day current-weekday-stats">wind:</li>
    </div>
  );
}
