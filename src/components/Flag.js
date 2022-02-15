import React from "react";
export default function Flag({ flag, countryStats }) {
  if(!flag) {
    return <></>;
  }
  //console.log("Flag name", flag.name);
  return (
    <div>
      <h2>The {countryStats.name} flag</h2>
      <img src={`https://countryflagsapi.com/png/${flag.name}`} alt="Country Flag" width="500" />
    </div>
  )
}