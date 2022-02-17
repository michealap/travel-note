import React from "react";
import Paper from "@mui/material/Paper";

export default function Flag({ flag }) {
  if(!flag) {
    return <></>;
  }
  //console.log("Flag name", flag.name);
  return (
      <Paper elevation={20}>
      <img src={`https://countryflagsapi.com/png/${flag.name}`} alt="Country Flag" width="500" />
      </Paper>
  )
}