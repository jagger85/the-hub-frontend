import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { styles as stl } from './CustomSelectStyle'

/**
 * 
 * @param {*} props 
 * @returns
 * props.onchange
 * values
 */
function CustomSelect(props) {
    const [type, setType] = useState('');

    const handleChange = (event) => {
     setType(event.target.value); 
     props.onChange(event.target.value)
    };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
    <InputLabel id="demo-select-small" sx={stl.inputLabel}>Filter</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={type}
      label="Filter"
      onChange={handleChange}
      sx={stl.select}
    >
    {props.menuItems.map((e)=>{
      return <MenuItem values={Object.keys(e)}>{Object.values(e)}</MenuItem>
    })}
    </Select>
  </FormControl>
  )
}

export default CustomSelect