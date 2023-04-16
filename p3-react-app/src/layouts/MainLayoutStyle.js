import { colors } from "../theme";
const drawerWidth = 240;

export const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    heigth: "100vh",

  },
  content: {
    background: colors.background[900],
  },

  drawer: {
    margin: 0,
    width: drawerWidth,
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      background: colors.background[900],
      width: drawerWidth,
      boxSizing: "border-box",
      border: 0
    },
  },
  gridSection : {
    margin: 1,
  },
  gridAvatar:{
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: 200,
  },
  gridLogo: {
    display: 'flex',
    justifyContent: 'center'
  },
  listItemText:{
    color: colors.background[400],
    fontFamily: 'Industry'
  },
  listItemIcon:{
    color : colors.background[400]
  }
};
