export const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    alignContent: 'center',
  },

  rightLeftContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: 'row',
      lg: 'row',
      xl: 'row',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  rightContainer: {
    minWidth: '400px',
    content: '""',
    backgroundColor: 'rgba(81, 81, 81, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: {
      xs: '0px 0px 10px 10px',
      sm: '0px 0px 10px 10px',
      md: '0px 10px 10px 0px',
      lg: '0px 10px 10px 0px',
      xl: '0px 10px 10px 0px', 
    },
  },

  leftContainer: {
    p: 2,

    minWidth: '400px',
    backgroundColor: 'rgba(184, 184, 184, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: {
      xs: '10px 0px 0px 0px',
      sm: '10px 10px 0px 0px',
      md: '10px 0 0 10px',
      lg: '10px 0 0 10px',
      xl: '10px 0 0 10px',
    },
  },
  section: {
    m: 2
  }
};
