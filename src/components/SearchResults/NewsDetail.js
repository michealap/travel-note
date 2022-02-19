import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function NewsDetail({ article }) {
  if(!article) { //starting state is false
    return <></>;
  }

  return(
      <Box sx={{ width: "90%", m: "5%"}}>
      <Typography component="div" variant="h4">
        {article.title}
      </Typography>
      <Typography component="div" variant="h5">
        {article.description}
        <a href={article.url}>{article.title}</a>
      </Typography>
      </Box>
  )
}