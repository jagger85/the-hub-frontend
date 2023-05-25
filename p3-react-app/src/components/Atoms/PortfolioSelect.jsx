import React, { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { MyContext } from '../../utils/MyContexProvider';
import { useContext } from 'react';
import { actionTypes } from '../../utils/MyContexProvider';
import { v4 as uuid } from 'uuid';
import { dataService } from '../../utils/dataService';
import { TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function PortfolioSelect() {

  const { state, dispatch } = useContext(MyContext);
  const [value, setValue] = useState();

  const handleChange = async (event) => {
    setValue(event.target.value);
    const selectedPortfolio = await dataService.getPortfolio(event.target.value);
    dispatch({ type: actionTypes.SET_SELECTED_PORTFOLIO, selectedPortfolio: selectedPortfolio });
  };
  return (
    <FormControl fullWidth>

    {state.portfolios == null | state.selectedPortfolio == undefined?
        <TextField size='small' defaultValue='Loading...' onChange={handleChange}>
        <AddIcon />
      </TextField>
      
      : state.portfolios.length == 0  ?
        <TextField size='small' defaultValue='Add a portfolio' onChange={handleChange}>
          <AddIcon />
        </TextField>

      :  <TextField select size='small' value={state.selectedPortfolio.alias} onChange={handleChange}>
          {state.portfolios.map((x) => {
            return (
              <MenuItem key={uuid()} value={x.alias}>
                <Typography variant='h7light'>{x.alias}</Typography>
              </MenuItem>
          );})}
        </TextField>
      }
      
    </FormControl>
  );
}

export default PortfolioSelect;
