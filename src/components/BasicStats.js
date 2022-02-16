import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function BasicStats({ countryStats }) {
  if(!countryStats) {
    return <></>;
  }
  return (
    <Box sx={{ width: "90%", m: "5%", }}>
      <h2>Common Knowledge</h2>
      <Divider />
      <p>{countryStats.name}'s capital city is {countryStats.capital}</p>
      <p>And the region it can be found in is {countryStats.region}</p>
      <p>{countryStats.name}'s has a population of: {countryStats.population}</p>
      <Divider />
      <h2>Currency Converter</h2>
      <Divider />

    </Box>
  )
}