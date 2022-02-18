import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

export default function NewsArticle({ article, setSelectedArticle }) {
  return (
    <ListItemButton
        onClick={setSelectedArticle}
      >
      <ListItemText>
        {article.url}
        </ListItemText>
      <Typography component="div" variant="h5">
      {article.title}</Typography>
    </ ListItemButton>
  )
}