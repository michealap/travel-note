import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

export default function NewsDetail({ article }) {
  if(!article) { //starting state is false
    return <>NOthing to display
    {/* <Card sx={{ width: 200 }}>
    <CardContent>
    <Skeleton sx={{ height: 100 }} animation="wave" variant="rectangular" />
    <Skeleton animation="wave" height={100} width="100%" />
    </CardContent>
    </Card> */}
    </>;
  }

  return(
    <div>
      <Box sx={{ width: "90%", m: "5%", }}>
      <h2>Current News</h2>
      <Typography component="div" variant="h5">
        <a href={article.url}>{article.title}</a>
      </Typography>
      <Typography component="div" variant="h6">
        {article.description}
      </Typography>
      </Box>
    </div>
  )
}