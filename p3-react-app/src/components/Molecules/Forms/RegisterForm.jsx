import React from 'react';
import { useState } from 'react';
import { Validator, isValid, isEmailValid } from './Validator';
import CustomInput from '../../Atoms/CustomInput';
import { Box, Typography, Button } from '@mui/material';
import { dataService } from '../../../scripts/dataService';

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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      {/** Login form & info container */}
      <Box
        sx={{
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
        }}>
        {/** Login container  */}
        <Box
          p='30px'
          sx={{
            minWidth: '400px',
            backgroundColor: 'rgba(0, 24, 57, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderRadius: {
              xs: '30px 0px 0px 0px',
              sm: '30px 30px 0px 0px',
              md: '30px 0 0 30px',
              lg: '30px 0 0 30px',
              xl: '30px 0 0 30px',
            },
          }}>
          <Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography variant='h5' fontWeight='bold' color='white'>
                Sign Up
              </Typography>
            </Box>
            <CustomInput label='Username' placeholder='Enter a username' text={true} getValue={nameChanged} />
            <CustomInput label='Password' placeholder='Enter a password' isIconActive={true} getValue={pwdChanged} />
            <CustomInput
              label='Password confirmation'
              placeholder='Repeat the password'
              isIconActive={true}
              getValue={pwd2Changed}
            />
            <CustomInput
              label='Email'
              placeholder='Enter your email'
              isIconActive={false}
              text={true}
              getValue={emailChanged}
            />
            <Box display='flex' flexDirection='row' width='100%' justifyContent='center' p='5px'>
              <Button
                variant='contained'
                disabled={!isValid(pwd, pwd2, user) || !isEmailValid(email)}
                onClick={()=> handleRegister()}>
                Register
              </Button>
            </Box>
          </Box>
          <Button onClick={props.switch}>Do you have an account? Log in here</Button>
        </Box>

        {/** Info container  */}
        <Box
          p={2}
          sx={{
            minWidth: '400px',
            content: '""',
            backgroundColor: 'rgba(0, 24, 57, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderRadius: {
              xs: '0px 0px 30px 30px',
              sm: '0px 0px 30px 30px',
              md: '0px 30px 30px 0px',
              lg: '0px 30px 30px 0px',
              xl: '0px 30px 30px 0px',
            },
          }}>
          <Validator name={user} pwd={pwd} pwd2={pwd2} />
        </Box>
      </Box>
    </Box>
  ));
}

export default RegisterForm;
