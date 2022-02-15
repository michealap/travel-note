import React from "react";
export default function Weather({ weatherStats, countryStats }) {
  
  if(!weatherStats) { //starting state is false
    return <></>;
  }
  console.log("weather stats", weatherStats);
  let weatherCondition = weatherStats.condition;
  
  return (
    <div>
      <h2>{countryStats.name} Capital - {countryStats.capital}'s weather</h2>
      {/*<p>Condition {weatherStats.condition}</p>  */}
      <p>It's {weatherCondition.text} outside today</p><img src={weatherCondition.icon} alt="" />
      <p>The temperature in {countryStats.capital} is {weatherStats.temp_c} C / {weatherStats.temp_f} F</p>
      <p>But it feels more like {weatherStats.feelslike_c} C / {weatherStats.feelslike_f} F with the wind.</p>
      
      <p>The humidity is {weatherStats.humidity}</p> 
      {weatherStats.precip_mm > 0 ? <p>It's going to rain today</p> : <p>It's not going to rain today</p>}
    </div>
  )
}