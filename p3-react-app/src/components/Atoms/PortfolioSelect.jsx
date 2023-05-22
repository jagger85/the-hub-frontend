import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { MyContext } from '../../utils/MyContexProvider';
import { useContext } from 'react';
import { actionTypes } from '../../utils/MyContexProvider';
import { v4 as uuid } from 'uuid';
import { dataService } from '../../utils/dataService';
function PortfolioSelect() {
  const { state, dispatch } = useContext(MyContext);

  const [portfolio, setPortfolio] = useState('');

  const handleChange = async (event) => {
    setPortfolio(event.target.value);
    const selectedPortfolio = await dataService.getPortfolio(event.target.value);
    dispatch({ type: actionTypes.SET_SELECTED_PORTFOLIO, selectedPortfolio: selectedPortfolio });
  };

  useEffect(() => {
    const init = async () => {
      const preferredPortfolio = await dataService.getPreferredPortfolio();
      setPortfolio(preferredPortfolio.alias);
    };
    init();
  }, []);

  return (
    <FormControl fullWidth>
      <Select value={portfolio} onChange={handleChange}>
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
