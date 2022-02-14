import React from "react";
export default function Weather({ weatherStats, countryStats }) {
  
  if(!weatherStats) { //starting state is false
    return <></>;
  }


  //console.log("Weather stat", weatherStats);
  //console.log("weather condition", weatherStats.condition);
  let weatherCondition = weatherStats.condition;
  //console.log("weather condition", weatherStats);
  
  return (
    <div>
      <h2>{countryStats.name}'s Capital - {countryStats.capital} weather</h2>
      {/*<p>Condition {weatherStats.condition}</p>  */}
      <p>It's  outside </p>
      <p>Temperature {weatherStats.temp_c} C / {weatherStats.temp_f} F</p>
      <p>But it feels more like {weatherStats.feelslike_c} C / {weatherStats.feelslike_f} F with the wind.</p>
      
      <p>The humidity {weatherStats.humidity}</p> 
      
    </div>
  )
}