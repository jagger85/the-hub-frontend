import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { styles as stl } from './GalleryDropStyle';

/**
 * @property {string} props.label - A text to show on the accorddion
 * @property {object} props.children
 * @returns - An accorddion that accepts children
 */
function GalleryDrop(props) {
  
  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={stl.container}>
    <Accordion sx={stl.accordionContainer} expanded={expanded === "panel1"} onChange={handleChange("panel1")} >
    <AccordionSummary sx={stl.accordionSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
    <Typography variant='h5' sx={{ width: "33%", flexShrink: 0 }}>{props.title}</Typography>
    <Typography sx={{ color: "text.secondary" }}></Typography>
    </AccordionSummary>
    <AccordionDetails sx={stl.accordionDetails}>
    {props.children}
    </AccordionDetails>
    </Accordion>
    </Box>
  )
}

export default GalleryDrop