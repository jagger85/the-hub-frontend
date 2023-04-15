import { colors } from "../theme";
const drawerWidth = 240;

export const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    width: "100%",
    background: colors.background[300],
  },
  header: {
    display: "flex",
    flexDirection: "row",
    left: drawerWidth,
  },
  drawer: {
    margin: 0,
    width: drawerWidth,
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      background: colors.background[300],
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
  }
};
