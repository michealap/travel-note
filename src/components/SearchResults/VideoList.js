import React from "react";
import VideoItem from "./VideoItem";
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

export default function VideoList({ videos, setSelectedVideo }) {
  
  const renderedVideos = videos && videos.map((video) => {
    return (
    <VideoItem key={video.id.videoId} video={video} setSelectedVideo={()=> setSelectedVideo(video)} />
  )})
    return (
      <Paper style={{maxHeight: 500, overflow: 'auto'}}>
      <List component="nav" aria-label="secondary mailbox folder">
        {renderedVideos}
      </List>
      </Paper>

    );
}