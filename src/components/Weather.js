import React from "react";
export default function Weather({ weatherStats }) {
  // console.log("Weather stats", weatherStats);
  if(!weatherStats) { //starting state is false
    return <></>;
  }
  return (
    <div>
      <p>Current Weather</p>
      <p>----------------------</p>
      {/* <p>{weatherStats.condition.text}</p>
      <p>Temperature {weatherStats.temp_c} C / {weatherStats.temp_f} F</p>
      <p>Humidity {weatherStats.humidity}</p>      */}
    </div>
  )
}