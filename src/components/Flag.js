import React from "react";
export default function Flag({ flag, countryStats }) {
  if(!flag) {
    return <></>;
  }
  //console.log("Flag name", flag.name);
  return (
    <div>
      <p><b>The {countryStats.name} flag</b></p>
      <img src={`https://countryflagsapi.com/png/${flag.name}`} alt="Country Flag" width="500" />
    </div>
  )
}