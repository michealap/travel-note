import React from "react";
import NewsArticle from "./NewsArticle";
import List from "@mui/material/List";
import Box from '@mui/material/Box';


export default function NewsList({ newsList, setSelectedArticle }) {
  
  const news = newsList && newsList.map((article) => {
    return (
    <NewsArticle key={article.title} article={article.url} setSelectedArticle={()=> setSelectedArticle(article)} />
  )})
    return (
      <Box sx={{ width: "30%", p:"5%", border: "1" }}>
      
      <List component="nav" color="text.primary" text="news" autofocus="true">
        {news}
      </List>
  
      </Box>

    );
}