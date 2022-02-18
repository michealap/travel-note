import React from "react";
import Box from '@mui/material/Box';

export default function Currency({ currency }) {
  if(!currency) {
    return <></>;
  }
  //console.log("Currency Tag", currencyData);
  return (
    <Box sx={{ width: "90%", m: "5%", }}>
        <h2>Currency conversion from CAD</h2>
        <p>Every 1 CAD dollar will be worth {currency.new_amount}{currency.new_currency}</p>
    </Box>
  )
}