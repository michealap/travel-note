import React from "react";
import Typography from '@mui/material/Typography';

export default function VideoDetail({ video }) {
  if(!video) { //starting state is false
    return <>nothing to display</>;
  }

  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <iframe src={videoSrc} allowFullScreen title="Video player" height="350" width="600"></iframe>
      <Typography component="div" variant="h5">
        {video.snippet.title}
      </Typography>
      <Typography component="div" variant="h6">
        {video.snippet.description}
      </Typography>
    </div>
  )
}
 