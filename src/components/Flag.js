import React from "react";

export default function Flag({ flag }) {
  if(!flag) {
    return <></>;
  }
  
  return (
    <div class="flag">
      <img src={`https://countryflagsapi.com/png/${flag.name}`} alt="Country Flag" width="500" class="flag-image"/>
    </div>
  )
}