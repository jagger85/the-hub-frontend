import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
import { useReducer } from "react";
import CustomSelect from "../Atoms/CustomSelect";

const initialValue = {
  endpoint: apiCalls.getEndpoint,
  network: apiCalls.getNetwork,
};

const reducer = (settings, action) => {
  switch (action.type) {
    case "network":
      apiCalls.setNetwork(action.payload);
      return { ...settings, network: action.payload };

    case "endpoint":
      apiCalls.setEndpoint(action.payload);
      return { ...settings, endpoint: action.payload };

    default:
      console.log(action + " This action is not supported");
  }
};

function NetworkSettings() {
  const [settings, dispatch] = useReducer(reducer, initialValue);

  const handleSelectChange = (value) => {
    dispatch({ type: "endpoint", payload: value });
  };
  const handleNetworkChange = (event) => {
    event.target.value == "mainnet"
      ? dispatch({ type: "network", payload: "mainnet" })
      : dispatch({ type: "network", payload: "testnet" });
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
          <FormLabel id="demo-radio-buttons-group-label">Network</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="mainnet"
            name="radio-buttons-group"
            value={apiCalls.getNetwork}
            onChange={handleNetworkChange}
          >
            {apiCalls.getNetworks.map((e) => {
              return (
                <FormControlLabel
                  value={e}
                  control={<Radio />}
                  label={<Typography color="white">{e}</Typography>}
                  key={e}
                />
              );
            })}
          </RadioGroup>
  
      </Grid>
      <Grid item xs={12}>
          <CustomSelect
            onChange={handleSelectChange}
            menuItems={apiCalls.getEndpoints}
            label="Enpoints"
            width = {{width:200}}
          />
      </Grid>
    </Grid>
  );
}

export default NetworkSettings;
