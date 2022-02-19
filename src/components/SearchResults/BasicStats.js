import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function BasicStats({ countryStats }) {
  if(!countryStats) {
    return <></>;
  }
  
  return (
    <Box sx={{ width: "90%", m: "5%", }}>
      <h2>Common Knowledge</h2>
      <Divider />
      <Typography variant="h5" pt={1}>
      {countryStats.name}'s capital city is {countryStats.capital} <br></br>
      And the region it can be found in is {countryStats.region}<br></br>
      {countryStats.name}'s has a population of {countryStats.population}
      </Typography>
      <Divider />
    </Box>
  )
}