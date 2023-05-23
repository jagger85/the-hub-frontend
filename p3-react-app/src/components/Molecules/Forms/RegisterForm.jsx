import React from 'react';
import { useState } from 'react';
import { Validator, isValid, isEmailValid } from './Validator';
import CustomInput from '../../Atoms/CustomInput';
import { Box, Typography, Button } from '@mui/material';
import { dataService } from '../../../utils/dataService';
import {styles as stl} from './FormsStyle'
/**
 * @component JSX functional component for a login panel
 */
function RegisterForm(props) {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [email, setEmail] = useState('');

  const nameChanged = (e) => {
    setUser(e.target.value);
  };

  const pwdChanged = (e) => {
    setPwd(e.target.value);
  };

  const pwd2Changed = (e) => {
    setPwd2(e.target.value);
  };

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = () => {
    dataService.createUser(user, email, pwd);
  };
  return ({
    /** Main container */
  } = (
    <Box
      sx={stl.mainContainer}>
      {/** Login form & info container */}
      <Box
        sx={stl.rightLeftContainer}>
        {/** Login container  */}
        <Box
          sx={stl.leftContainer}>
          <Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography variant='h5' fontWeight='bold' color='white'>
                Sign Up
              </Typography>
            </Box>
            <Box sx={stl.section}>
            <CustomInput label='Username' placeholder='Enter a username' text={true} getValue={nameChanged} />
            </Box>
            <Box sx={stl.section}>
            <CustomInput label='Password' placeholder='Enter a password' isIconActive={true} getValue={pwdChanged} />
            </Box>
            <Box sx={stl.section}>
            <CustomInput
            label='Password confirmation'
            placeholder='Repeat the password'
            isIconActive={true}
            getValue={pwd2Changed}
            />
            </Box>
            <Box sx={stl.section}>
            <CustomInput
            label='Email'
            placeholder='Enter your email'
            isIconActive={false}
            text={true}
            getValue={emailChanged}
            />
            </Box>
            <Box display='flex' flexDirection='row' width='100%' justifyContent='center' p='5px'>
              <Button
                variant='contained'
                disabled={!isValid(pwd, pwd2, user) || !isEmailValid(email)}
                onClick={() => handleRegister()}>
                Register
              </Button>
            </Box>
          </Box>
          <Button onClick={props.switch}>Do you have an account? Log in here</Button>
        </Box>

        {/** Info container  */}
        <Box
          p={2}
          sx={stl.rightContainer}>
          <Validator name={user} pwd={pwd} pwd2={pwd2} />
        </Box>
      </Box>
    </Box>
  ));
}

export default RegisterForm;
