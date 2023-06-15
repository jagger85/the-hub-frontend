import { Box, Button, ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import RegisterForm from '../components/Molecules/Forms/RegisterForm'
import LoginForm from '../components/Molecules/Forms/LoginForm'
import React from 'react'
import { useState } from 'react'
import background from '../assets/background.jpeg'

function LoginLayout(props) {
    const [login, setLogin] = useState(true)

    const switchForm = () => {
        setLogin(!login)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundImage: `url(${background})`,
                    height: '100%',
                    width: '100%',
                }}
            >
                {login ? (
                    <LoginForm
                        login={props.login}
                        switch={() => switchForm()}
                    />
                ) : (
                    <RegisterForm switch={() => switchForm()} />
                )}
            </Box>
        </ThemeProvider>
    )
}

export default LoginLayout
