import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Places({ places }) {
  if(!places) {
    return <></>;
  }
  return (
    <Box sx={{ width: "90%", m: "5%", }} textAlign="center">
        <h2>Popular Places</h2>
        <Divider />
        {/* map over places array and select properties.name */}
        <Typography></Typography>
    </Box>
  )
}