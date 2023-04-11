import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Select, MenuItem, InputLabel, Box, FormControl,  FormLabel, RadioGroup, FormControlLabel, Radio} from "@mui/material";

const mainnetEndpoints = [
  {
    name: "EOSNATION",
    url: "http://ultra.api.eosnation.io",
  },
  {
    name: "EOSRIO",
    url: "https://ultra.eosrio.io",
  },
  {
    name: "CRYPTOLIONS",
    url: "https://api.ultra.cryptolions.io/",
  },
  {
    name: "EOSUSA",
    url: "https://uos.eosusa.news",
  }
]

const testnetEndpoints = [
  {
    name : 'EOSEOUL',
    url: 'https://ultratest-api.eoseoul.io/'
  },
  {
    name : 'EOSNATION',
    url: 'http://ultratest.api.eosnation.io'
  },
  {
    name : 'EOSRIO',
    url: 'https://testnet.ultra.eosrio.io'
  },
  {
    name : 'CRYPTOLIONS',
    url: 'https://api.ultra-testnet.cryptolions.io'
  }
]

function Settings(props) {

  const [network, setNetwork] = useState(mainnetEndpoints)
 
  const handleSelectChange = (event) => {
    props.setEndpoint(event.target.value);
  };
  const handleNetworkChange = (event) => {
    setNetwork((event.target.value == 'mainnet') ? mainnetEndpoints : testnetEndpoints)
    props.setNetwork((event.target.value == 'mainnet') ? 'mainnet' : 'testnet')
    props.setEndpoint((event.target.value == 'mainnet') ? mainnetEndpoints[0] : testnetEndpoints[0])
  }

  return (
    <div>
      <Typography>Preferences</Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <FormLabel id="demo-radio-buttons-group-label">Network</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="mainnet"
            name="radio-buttons-group"
            value={props.network}
            onChange= {handleNetworkChange}
          >
            <FormControlLabel value= 'mainnet' control={<Radio />} label="Mainnet"/>
            <FormControlLabel value= 'testnet' control={<Radio />} label="Testnet"/>

          </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
          <InputLabel id="endpoints-label">Endpoint</InputLabel>
          <Select
            labelId="endpoints-label"
            id="enpoint-select"
            value={props.endpoint}
            label="Endpoint"
            onChange={handleSelectChange}
          >
             { network.map((element) => (
              <MenuItem key={element.name} value={element.url}>
                {element.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Settings;
