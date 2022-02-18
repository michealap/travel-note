import React from "react";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px'
}));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Weather({ weatherStats, countryStats }) {
  
  if(!weatherStats) { //starting state is false
    return <></>;
  }
  //console.log("weather stats", weatherStats);
  let weatherCondition = weatherStats.condition;
  
  return (
    <Grid container spacing={1} >
      
      {[lightTheme].map((theme, index) => (
        <Grid item xs={10} key={index}>
          <h2>Capital - {countryStats.capital}</h2>
          <h2>Current Weather </h2>
          
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                width: "100%",
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
     
        <img src={weatherCondition.icon} alt="" width="100" height="100" float="right" />
          <Item key={1} elevation={2}>
            It's {weatherCondition.text} outside today
            </Item>
            <Item key={2} elevation={2}>
            The temperature is {weatherStats.temp_c} C / {weatherStats.temp_f} F
            </Item>
            <Item key={3} elevation={4}>
            But it feels more like {weatherStats.feelslike_c} C / {weatherStats.feelslike_f} F with the wind
            </Item>
            <Item key={4} elevation={6}>
            The humidity is {weatherStats.humidity} 
            </Item>
            <Item key={5} elevation={2}>
            {weatherStats.precip_mm > 0 ? "It's going to rain today" : "It's not going to rain today"}
            </Item>
          </Box>
        </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  )
}