import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
import { useReducer } from "react";
import { styles as stl } from "./PagesStyle";

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

function Settings() {
  const [settings, dispatch] = useReducer(reducer, initialValue);

  const handleSelectChange = (event) => {
    dispatch({ type: "endpoint", payload: event.target.value });
  };
  const handleNetworkChange = (event) => {
    event.target.value == "mainnet"
      ? dispatch({ type: "network", payload: "mainnet" })
      : dispatch({ type: "network", payload: "testnet" });
  };

  return (

      <Grid container xs={12} sx={stl.container}>
        <Grid item xs={12} sx={stl.titleContainer}>
          <Typography variant="h3">Settings</Typography>
        </Grid>
        <Grid item sx={stl.section}>
          <FormControl fullWidth>
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
                    label={e}
                    key={e}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sx={stl.section}>
          <FormControl fullWidth>
            <InputLabel id="endpoints-label">Endpoint</InputLabel>
            <Select
              labelId="endpoints-label"
              id="enpoint-select"
              value={apiCalls.getEndpoint}
              label="Endpoint"
              onChange={handleSelectChange}
            >
              {apiCalls.getEndpoints.map((element) => (
                <MenuItem key={element.name} value={element.url}>
                  {element.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

  );
}

export default Settings;
