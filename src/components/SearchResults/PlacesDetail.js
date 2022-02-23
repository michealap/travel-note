import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function PlacesDetail({ poi }) {
  if(!poi) { //starting state is false
    return <></>;
  }

  const onePlace = poi.properties;

  return(
      <Box sx={{ width: "90%", m: "5%"}}>
      <Typography component="div" variant="h5" lineHeight="10%">
        {onePlace.name}
      </Typography>
      </Box>
  )
}