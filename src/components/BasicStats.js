import React from "react";
export default function BasicStats({ countryStats }) {
  if(!countryStats) {
    return <></>;
  }
  return (
    <div>
      <h2>Basic Info</h2>
      <p>{countryStats.name}'s capital city is {countryStats.capital}</p>
      <p>And the region it can be found in is {countryStats.region}</p>
      <p>{countryStats.name}'s has a population of: {countryStats.population}</p>
      <p>It also has a tourist population of {countryStats.tourists}</p>
    </div>
  )
}