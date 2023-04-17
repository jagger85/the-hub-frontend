import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import { Typography, Grid, Paper } from "@mui/material";
import { colors, boxShadow } from "../../theme";

const style = {
    container:{
        width:'100%',
        backgroundColor : colors.background[1000],
        boxShadow: boxShadow,
        padding: 14,
        marginTop: 2
      },

  section:{
    display: "flex",
    justifyContent: 'center',
  },
  icon: {
    fontSize: 100
  }
};

/**
 * @param {String} props.text - A text to display under the icon 
 * @returns A paper component with an empty cart icon and a text under
 */

function NoData(props) {
  return (
    <Paper sx={style.container}>
    <Grid container>
    <Grid item sx={style.section} xs={12}>
    <InboxIcon sx={style.icon} xs={12} />
    </Grid>
    <Grid item sx={style.section} xs={12}>
    <Typography variant="h6" xs={12}>{props.text}</Typography>
    </Grid>
    </Grid>
    </Paper>
  );
}

export default NoData;
