import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

export default function VideoItem({ video, setSelectedVideo }) {
  return (
    <ListItemButton
        onClick={setSelectedVideo}
      >
      <Typography component="div" variant="h5">
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      </Typography>
      <Typography component="div" variant="h6">
      {video.snippet.title}</Typography>
    </ ListItemButton>
  )
}