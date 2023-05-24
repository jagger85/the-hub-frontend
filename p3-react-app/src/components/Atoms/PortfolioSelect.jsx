import React, { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { MyContext } from '../../utils/MyContexProvider';
import { useContext } from 'react';
import { actionTypes } from '../../utils/MyContexProvider';
import { v4 as uuid } from 'uuid';
import { dataService } from '../../utils/dataService';
function PortfolioSelect() {

  const { state, dispatch, getPortfolio } = useContext(MyContext);

  const [value, setValue] = useState();

  const handleChange = async (event) => {
    setValue(event.target.value)
    const selectedPortfolio = await dataService.getPortfolio(event.target.value);
    dispatch({type: actionTypes.SET_SELECTED_PORTFOLIO, selectedPortfolio: selectedPortfolio})
  };



  return (
     

      <FormControl fullWidth>
      <Select value={getPortfolio()?.alias} onChange={handleChange}>
      {state.portfolios != null &&
        state.portfolios.map((x) => {
          return (
            <MenuItem key={uuid()} value={x.alias}>
            {x.alias}
            </MenuItem>
            );
          })}
          </Select>
          </FormControl>
        
  );
}

export default PortfolioSelect;
