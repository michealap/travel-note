import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PlacesDetail from './PlacesDetail';

export default function Places({ places }) {
  const pois = places && places.map((poi) => {
    return (
    <PlacesDetail key={poi.id} poi={poi} />
  )})
  return (
    <Box sx={{ width: "90%", m: "5%", }} textAlign="center">
        <h2>Popular Places</h2>
        <Divider />
        {/* map over places array and select properties.name */}
        <Typography variant="h5">
          {pois}
        </Typography>
    </Box>
  )
}