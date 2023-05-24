import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select} from '@mui/material';
import { useState } from 'react';
import { styles as stl } from './CustomSelectStyle'
import { v4 as uuid } from 'uuid';

/**
 * @property {string} props.label - A text to show by default
 * @property {Object} props.width - The desired width in this format {'width': number}
 * @property {Array} props.menuItems - An Array of objects with this format { text: "sometext", value: "someValue" }
 * @returns - A custom Select MUI component with 300 width by default
 */
function CustomSelect(props) {
    const [type, setType] = useState("");

    const handleChange = (event) => {
     setType(event.target.value); 
     props.onChange(event.target.value)
    };

  return (
    
    <FormControl size="small">
    <InputLabel id="demo-select-small" sx={stl.inputLabel}>{props.label}</InputLabel>
    <Select
    labelId="demo-select-small"
    id="demo-select-small"
    value={type}
    label={props.label}
    onChange={handleChange}
    sx={[stl.select,props.width ?? {'width':300}]}
    >
    {props.menuItems.map((e)=>{ 
      return <MenuItem key={uuid()} value={e.value}>{e.text}</MenuItem>
    })}
    </Select>
    </FormControl>
    

  )
}

export default CustomSelect