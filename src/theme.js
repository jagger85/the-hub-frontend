/**
 * Custom theme for material ui
 * I used this website for color palette https://m2.material.io/inline-tools/color/
 */
import { createTheme } from '@mui/material';

const light = {
    1: 'rgba(210, 234, 251,',
    2: 'rgba(166, 213, 248,',
    3: 'rgba(121, 192, 244,',
    4: 'rgba(77, 171, 241,',
    5: 'rgba(32, 150, 237,',
    6: 'rgba(26, 120, 190,',
    7: 'rgba(19, 90, 142,',
    8: 'rgba(13, 60, 95,',
    9: 'rgba(6, 30, 47,',
}

export const colors = {
  purple: {
    100: '#dac3f4',
    200: '#c39aee',
    300: '#aa6ee8',
    400: '#9749e3',
    500: '#831bdc',
    600: '#7815d6',
    700: '#6a03cd',
    800: '#5c00c7',
    900: '#4400bf',
  },
  lightBlue: {
    100: '#d2eafb',
    200: '#a6d5f8',
    300: '#79c0f4',
    400: '#4dabf1',
    500: '#2096ed',
    600: '#1a78be',
    700: '#135a8e',
    800: '#0d3c5f',
    900: '#061e2f',
  },
  input: {
    100: '#d3d6da',
    200: '#a7aeb5',
    300: '#7b8591',
    400: '#4f5d6c',
    500: '#233447',
    600: '#1c2a39',
    700: '#151f2b',
    800: '#0e151c',
    900: '#070a0e',
  },
  background: {
    100: '#f4f4f4',
    200: '#ececec',
    300: '#dedede',
    400: '#bbbbbb',
    500: '#9b9b9b',
    600: '#727272',
    700: '#5f5f5f',
    800: '#404040',
    900: '#1f1f1f',
    1000: '#3d3d3d'
  },
  yellow: {
    100: '#f5d142'
  }
};
export const borderRadius = {
  borderRadius: 0.5
}
export const boxShadow = {
  boxShadow: '0 2px 4px rgba(0,0,0,.08),0 4px 8px rgba(0,0,0,.08),0 8px 16px rgba(0,0,0,.08),0 16px 24px rgba(0,0,0,.08),inset 0 1px 1px hsla(0,0%,100%,.08)'
}
export const boxShadowIn ={
 boxShadow: 'inset 2px 2px 4px rgba(0,0,0,.08),inset -1px -1px 1px hsla(0,0%,100%,.06)'
}
export const boxShadowDown ={
  boxShadow: '0 0px 4px rgba(0,0,0,.08),0 0px 8px rgba(0,0,0,.08),0 8px 0px rgba(0,0,0,.08),0 0px 24px rgba(0,0,0,.08),inset 0 1px 1px hsla(0,0%,100%,.08)'
}
export const boxShadowUp = {
  boxShadow: '0 0px 0px rgba(0,0,0,.08),0 0px 0px rgba(0,0,0,.08),0 0px 0px rgba(0,0,0,.08),0 0px 0px rgba(0,0,0,.08),inset 0 1px 1px hsla(0,0%,100%,.08)'
}
export const doubleBorder = {
  boxShadow:`0 0 0 2px #1b1825,0 0 0 3px ${colors.background[600]}`
}
export function getLight(color, intensity){

  return light[color]+ intensity +")"

}
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.purple[500],
    },
    background: {
      default: colors.background[700],
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: 'industry, Roboto',
    h1bold:{ fontFamily: 'industry-bold', fontSize: "6rem", fontWeight:300, lineHeight:1.167, letterSpacing: "-0.01562em"},
    h2bold:{ fontFamily: 'industry-bold', fontSize: "3.75rem", fontWeight:300, lineHeight:1.2, letterSpacing: "-0.00833em"},
    h3bold:{ fontFamily: 'industry-bold', fontSize: "3rem", fontWeight:400, lineHeight:1.167, letterSpacing: "0em"},
    h4bold:{ fontFamily: 'industry-bold', fontSize: "2.125rem", fontWeight:400, lineHeight:1.235, letterSpacing: "0.00735em"},
    h5bold:{ fontFamily: 'industry-bold', fontSize: "1.5rem", fontWeight:400, lineHeight:1.334, letterSpacing: "0em"},
    h6bold:{ fontFamily: 'industry-bold', fontSize: "1.25rem", fontWeight:500, lineHeight:1.6, letterSpacing: "0.0075em"},
    h7bold:{ fontFamily: 'industry-bold', fontSize: "1rem", fontWeight:500, lineHeight:1.6, letterSpacing: "0.0075em"},
    h8bold:{ fontFamily: 'industry-bold', fontSize: "0.75rem", fontWeight:400, lineHeight:1.6, letterSpacing: "0.0085em"},


    h1light:{ fontFamily: 'industry-light', fontSize: "6rem", fontWeight:300, lineHeight:1.167, letterSpacing: "-0.01562em"},
    h2light:{ fontFamily: 'industry-light', fontSize: "3.75rem", fontWeight:300, lineHeight:1.2, letterSpacing: "-0.00833em"},
    h3light:{ fontFamily: 'industry-light', fontSize: "3rem", fontWeight:400, lineHeight:1.167, letterSpacing: "0em"},
    h4light:{ fontFamily: 'industry-light', fontSize: "2.125rem", fontWeight:400, lineHeight:1.235, letterSpacing: "0.00735em"},
    h5light:{ fontFamily: 'industry-light', fontSize: "1.5rem", fontWeight:400, lineHeight:1.334, letterSpacing: "0em"},
    h6light:{ fontFamily: 'industry-light', fontSize: "1.25rem", fontWeight:500, lineHeight:1.6, letterSpacing: "0.0075em"},
    h7light:{ fontFamily: 'industry-light', fontSize: "1rem", fontWeight:500, lineHeight:1.6, letterSpacing: "0.0075em"},
    h8light:{ fontFamily: 'industry-light', fontSize: "0.75rem", fontWeight:600, lineHeight:1.6, letterSpacing: "0.0085em"},


    h1medium:{ fontFamily: 'industry-medium', fontSize: "6rem", fontWeight:300, lineHeight:1.167, letterSpacing: "-0.01562em"},
    h2medium:{ fontFamily: 'industry-medium', fontSize: "3.75rem", fontWeight:300, lineHeight:1.2, letterSpacing: "-0.00833em"},
    h3medium:{ fontFamily: 'industry-medium', fontSize: "3rem", fontWeight:400, lineHeight:1.167, letterSpacing: "0em"},
    h4medium:{ fontFamily: 'industry-medium', fontSize: "2.125rem", fontWeight:400, lineHeight:1.235, letterSpacing: "0.00735em"},
    h5medium:{ fontFamily: 'industry-medium', fontSize: "1.5rem", fontWeight:400, lineHeight:1.334, letterSpacing: "0em"},
    h6medium:{ fontFamily: 'industry-medium', fontSize: "1.25rem", fontWeight:500, lineHeight:1.6, letterSpacing: "0.0075em"},
    h7medium:{ fontFamily: 'industry-medium', fontSize: "1rem", fontWeight:500, lineHeight:1.6, letterSpacing: "0.0075em"},
    h8medium:{ fontFamily: 'industry-medium', fontSize: "0.75rem", fontWeight:600, lineHeight:1.6, letterSpacing: "0.0085em"},


  },
  components:{
    MuiInputBase:{
      styleOverrides: {
        root:{
        padding: 7, 
        bgcolor: colors.background[900], 
        borderRadius: '4px', 
        height: '2rem',
        fontFamily: 'industry-light',
      }
    },
      variants: [
        {
          props: { variant: 'purple'},
          style: {
            color: colors.purple[500],

          }
        },
        {
          props: { variant: 'grey'},
          style: {
            color: colors.background[500]
          }
        }
      ]
    }
  }
});
