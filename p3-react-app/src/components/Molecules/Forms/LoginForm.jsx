import React from 'react';
import { useState } from 'react';
import WelcomeBack from './WelcomeBack';
import CustomInput from '../../Atoms/CustomInput';
import { Box, Typography, Button } from '@mui/material';
import { dataService } from '../../../utils/dataService';
import { styles as stl } from './FormsStyle';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext, actionTypes } from '../../../utils/MyContexProvider';
/**
 * @component JSX functional component for a login panel
 */
function LoginForm(props) {

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  
  const {init} =useContext(MyContext)

  const nameChanged = (e) => {
    setUser(e.target.value);
  };

  const pwdChanged = (e) => {
    setPwd(e.target.value);
  };

  const handleLogin = async () => {
    const msg = await dataService.logInUser(user, pwd);
    const contextMsg = await init()
    console.log(contextMsg)
    setMessage(msg);
    if (msg == 'Login success!' & contextMsg == 'ok' ) navigate('/')
  };

  return (
    <Box sx={stl.mainContainer}>
      {/** Login form & info container */}
      <Box sx={stl.rightLeftContainer}>
        {/** Login container  */}
        <Box sx={stl.leftContainer}>
          <Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography variant='h5' fontWeight='bold' color='white'>
                Log in
              </Typography>
            </Box>
            <Box sx={stl.section}>
            <CustomInput label='Username' placeholder='Enter a username' text={true} getValue={nameChanged} />
            </Box>
            <Box sx={stl.section}>
            <CustomInput label='Password' placeholder='Enter a password' isIconActive={true} getValue={pwdChanged} />
            </Box>

            <Box display='flex' flexDirection='row'  justifyContent='center' sx={stl.section}>
              <Button variant='contained' disabled={user == '' || pwd == ''} onClick={() => handleLogin()}>
                Login
              </Button>
            </Box>
          </Box>
          <Button onClick={props.switch}>Don't have an account? Sing up here</Button>
        </Box>

        {/** Info container  */}
        <Box p={2} sx={stl.rightContainer}>
          <WelcomeBack message={message} />
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
