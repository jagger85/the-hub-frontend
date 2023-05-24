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
    fontFamily: 'industry, Roboto',
    h1:{
      color :'white'
    } ,
    h2:{
      color: 'white',
    } ,
    h3:{
      color: 'white',
    } ,
    h4:{
      color: 'white',
    } ,
    h5:{
      color: 'white',
    } ,
    h6:{
      color: 'white'
    },
    white:{
      fontFamily: 'industry',
      color: 'white'
    },
    grey: {
      fontFamily: 'industry',
     color: colors.background[400]
    }
  },
});
