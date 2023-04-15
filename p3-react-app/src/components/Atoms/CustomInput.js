import React from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { colors } from '../../theme';
import { useState } from 'react';

/**
 * @component - A custom inputText wich is a password by default
 * @property {string} props.label - Shows a text on itself top
 * @property {string} props.placeholder - A common placeholder for itself
 * @property {boolean} props.text - Text portperty must be true for showing the text
 * @property {boolean} props.isIconActive - Activate an icon for showing/hiding text
 * @property {event} props.getValue - Returns an event when the value changes
 */
function CustomInput(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="flex-start"
      p="10px">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start">
        <Typography color="white">{props.label}</Typography>

        <Paper>
          <InputBase
            onChange={props.getValue}
            type={props.text ?? showPassword ? 'text' : 'password'}
            fullWidth
            placeholder={props.placeholder}
            sx={{ p: 1, bgcolor: colors.input[500], borderRadius: '5px' }}
            endAdornment={
              props.isIconActive && (
                <InputAdornment
                  position="end"
                  sx={{ pr: 1 }}>
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default CustomInput;

