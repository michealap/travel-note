import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NewsArticle({ article }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        rubik-controls="panel1a-content"
      >
        <Typography variant="h5">{article.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6">
         {article.description}
         <a href={article.url}>{article.url}</a>
        </Typography>
      </AccordionDetails>
    </Accordion>     
  )
}