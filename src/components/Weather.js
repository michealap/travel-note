import React from "react";
export default function Weather({ weatherStats }) {
  // console.log("Weather stats", weatherStats);
  if(!weatherStats) { //starting state is false
    return <></>;
  }
  return (
    <div>
      <h2>Current Weather</h2>
      {/* <p>Condition {weatherStats.condition.text}</p>  */}
      {/* this one doesnt allow page to load similar to currency code */}
      <p>Temperature {weatherStats.temp_c} C / {weatherStats.temp_f} F</p>
      <p>Humidity {weatherStats.humidity}</p>
    </div>
  )
}