import React from "react";
import NewsArticle from "./NewsArticle";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';

export default function NewsList({ newsList }) {
  
  const news = newsList && newsList.map((article) => {
    return (
    <NewsArticle key={article.title} article={article} />
  )})
    return (
      <Box sx={{ width: "90%", m: "5%", }}>
      <h2 style={{textAlign: "center"}}>Current News</h2>
      <Paper style={{ maxHeight: 500, overflow: 'auto'}}>
        {news}
      </Paper>
      </Box>
    );
}