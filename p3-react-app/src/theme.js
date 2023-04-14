/**
 * Custom theme for material ui
 * I used this website for color palette https://m2.material.io/inline-tools/color/
 */

import { createTheme } from '@mui/material';

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
    100: '#d2d2d5',
    200: '#a5a5ab',
    300: '#797780',
    400: '#4c4a56',
    500: '#1f1d2c',
    600: '#191723',
    700: '#13111a',
    800: '#0c0c12',
    900: '#060609',
  },
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.purple[500],
    },
    background: {
      default: '#1f1d2c',
    },
  },
  typography: {
    fontFamily: ['sans-serif'].join(',')
  },
});
