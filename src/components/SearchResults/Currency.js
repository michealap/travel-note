import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Currency({ currency }) {
  if(!currency) {
    return <></>;
  }
  return (
    <Box sx={{ width: "90%", m: "5%", }} textAlign="center">
        <h2>Currency conversion from CAD</h2>
        <Divider />
        <Typography variant="h5" pt={1}>Every 1 CAD dollar will be worth {currency.new_amount} {currency.new_currency}</Typography>
        <Divider />
    </Box>
  )
}