import React from "react";

export default function Form() {
  return (
    <div className="mini-header">
      <form className="search-form">
        <input type="text" class="city-input" placeholder="TYPE CITY HERE" />
        <input type="submit" className="city-submit-button" value="✔" />
      </form>
    </div>
  );
}
