import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function BasicStats({ countryStats }) {
  if(!countryStats) {
    return <></>;
  }
  
  return (
    <Box sx={{ width: "90%", m: "5%", }} textAlign="center">
      <h2>Common Knowledge</h2>
      <Divider />
      <Typography variant="h5" pt={1}>
      {countryStats.name}'s capital city is {countryStats.capital} <br></br>
      The region it can be found in is {countryStats.region}<br></br>
      {countryStats.name} has a population of {countryStats.population / 1000} million and welcomes {countryStats.tourists} tourists.
      </Typography>
      <Divider />
    </Box>
  )
}