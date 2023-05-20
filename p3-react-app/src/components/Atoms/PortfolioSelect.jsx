import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MyContext } from '../../utils/MyContexProvider';
import { useContext } from 'react';
function PortfolioSelect() {

  const {state, dispatch } = useContext(MyContext);


  const handleChange = (event) => {};

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={'loading'}
          label={'loading'}
          onChange={handleChange}>
          {state.portfolios != null &&
            state.portfolios.map((x) => {
              return <MenuItem value={x.alias}>{x.alias}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default PortfolioSelect;
