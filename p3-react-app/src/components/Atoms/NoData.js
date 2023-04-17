import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import { Typography, Grid, Paper } from "@mui/material";
import { colors, boxShadow } from "../../theme";

const style = {
    container:{
        width:'100%',
        backgroundColor : colors.background[1000],
        boxShadow: boxShadow
    },
  section:{
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    fontSize: 100
  }
};

function NoData(props) {
  return (
    <Paper sx={style.container}>
    <Grid container  xs={12}>
    <Grid item sx={style.section} xs={12}>
    <InboxIcon sx={style.icon}/>
    </Grid>
    <Grid item sx={style.section} xs={12}>
    <Typography variant="h5">{props.text}</Typography>
    </Grid>
    </Grid>
    </Paper>
  );
}

export default NoData;
