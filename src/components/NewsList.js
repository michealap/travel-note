import React from "react";
import NewsArticle from "./NewsArticle";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from '@mui/material/Box';

export default function NewsList({ newsList, setSelectedArticle }) {
  
  const news = newsList && newsList.map((article) => {
    return (
    <NewsArticle key={article.id} article={article.url} setSelectedArticle={()=> setSelectedArticle(article)} />
  )})
    return (
      <Box sx={{ width: "90%", m: "5%", }}>
      <Paper style={{maxHeight: 500, overflow: 'auto'}}>
      <List component="nav" aria-label="secondary mailbox folder" color="text.primary">
        {news}
      </List>
      </Paper>
      </Box>

    );
}