import React from 'react';
import { Grid, Typography } from '@mui/material';
import { FormLabel, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';
import { apiCalls } from '../../../utils/apicalls';
import { useReducer } from 'react';
import CustomSelect from '../../Atoms/CustomSelect';
import { styles } from './NetworkSettingsStyle';
import { v4 as uuid } from 'uuid';
import { colors } from '../../../theme';
const initialValue = {
  endpoint: apiCalls.getEndpoint,
  network: apiCalls.getNetwork,
};

const reducer = (settings, action) => {
  switch (action.type) {
    case 'network':
      apiCalls.setNetwork(action.payload);
      return { ...settings, network: action.payload };

    case 'endpoint':
      apiCalls.setEndpoint(action.payload);
      return { ...settings, endpoint: action.payload };

    default:
      console.log(action + ' This action is not supported');
  }
};
/**
 * @returns A MUI Grid that contains a formulary to set up the connection configuration
 */
function NetworkSettings() {
  const [settings, dispatch] = useReducer(reducer, initialValue); //Sets the selected network and endpoint to the object apicalls

  const handleSelectChange = (value) => {
    dispatch({ type: 'endpoint', payload: value });
  };
  const handleNetworkChange = (event) => {
    event.target.value == 'mainnet'
      ? dispatch({ type: 'network', payload: 'mainnet' })
      : dispatch({ type: 'network', payload: 'testnet' });
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={styles.section}>
        <FormLabel id='demo-radio-buttons-group-label'><Typography variant='h5medium' color={colors.background[400]}>Network</Typography></FormLabel>
        <RadioGroup
          defaultValue='mainnet'
          name='radio-buttons-group'
          value={apiCalls.getNetwork}
          onChange={handleNetworkChange}>
          {apiCalls.getNetworks.map((e) => {
            return (
              <FormControlLabel
                value={e}
                control={<Radio/>}
                label={<Typography variant='h7medium' color={colors.background[400]}>{e}</Typography>}
                key={uuid()}
              />
            );
          })}
        </RadioGroup>
      </Grid>
      <Grid item sx={styles.section}>
        <CustomSelect
          onChange={handleSelectChange}
          menuItems={apiCalls.getEndpoints}
          label='Enpoints'
          width={{ width: 200 }}
        />
      </Grid>
    </Grid>
  );
}

export default NetworkSettings;
