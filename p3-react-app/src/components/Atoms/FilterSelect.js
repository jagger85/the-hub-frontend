import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { styles as stl } from './FilterSelectStyle'

function FilterSelect(props) {
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
      <MenuItem value='all'>All</MenuItem>
      <MenuItem value='buy'>Buys</MenuItem>
      <MenuItem value='transfer'>Transfers</MenuItem>
      <MenuItem value='resell'>Resell</MenuItem>
      <MenuItem value='cancelresell'>cancelresell</MenuItem>
    </Select>
  </FormControl>
  )
}

export default FilterSelect