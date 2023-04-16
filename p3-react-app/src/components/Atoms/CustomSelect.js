import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select, Box} from '@mui/material';
import { useState } from 'react';
import { styles as stl } from './CustomSelectStyle'

function CustomSelect(props) {
    const [type, setType] = useState('');

    const handleChange = (event) => {
     setType(event.target.value); 
     props.onChange(event.target.value)
    };

  return (
    <Box>
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
      return <MenuItem value={e.value}>{e.text}</MenuItem>
    })}
    </Select>
    </Box>

  )
}

export default CustomSelect