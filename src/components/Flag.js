import React from "react";
export default function Flag({ flag }) {
  if(!flag) {
    return <></>;
  }
  console.log("Flag name", flag.name);
  return (
    <div>
      <img src={`https://countryflagsapi.com/png/${flag.name}`} alt="Country Flag" width="500" />
    </div>
  )
}