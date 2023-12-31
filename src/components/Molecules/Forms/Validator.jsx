import React from 'react'
import { rules, emailRule } from '../../../utils/passwordRules'
import { Box, Typography } from '@mui/material'
import { colors } from '../../../theme'
import { v4 as uuid } from 'uuid'
/**
 * @component JSX functional component that takes care of testing if passwords applies a set of rules @see rules
 * @param {string} props.pwd - The user password
 * @param {string} props.pwd2 - The user password confirmation
 * @param {string} props.name - The user name
 * @returns  A list of messages with the appropiate warnings
 */
export function Validator(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h5medium"
                fontWeight="bold"
                color="white"
                p={3}
            >
                Join With Us{' '}
            </Typography>

            {/** Show a message when rules are not met*/}
            {!isValid(props.pwd, props.pwd2, props.name) && props.pwd != '' && (
                <Typography
                    variant="h5medium"
                    color={colors.background[300]}
                    p={2}
                >
                    Password must follow these rules
                </Typography>
            )}

            {/** Looping all the rules */}
            {rules.map((pwdRule) => {
                if (!pwdRule.rule.test(props.pwd) && props.pwd != '')
                    return (
                        <Typography
                            key={uuid()}
                            variant="h6light"
                            color={colors.input[200]}
                        >
                            {pwdRule.warning}
                        </Typography>
                    )
            })}

            {/** Checking if both passwords match */}
            {props.pwd2 != '' && props.pwd != props.pwd2 ? (
                <Typography variant="h6light" color={colors.input[200]}>
                    Passwords must match
                </Typography>
            ) : (
                ''
            )}
        </Box>
    )
}
/**
 * @function isValid - Checks if user inputs applies a set of rules, also checks that user field is not blank @see rules
 * @param {string} pwd - The user password
 * @param {string} pwd2 - The user password confirmation
 * @param {string} userName - The user name
 * @returns {boolean}
 */
export function isValid(pwd, pwd2, userName) {
    return (
        rules.every((element) => element.rule.test(pwd)) &&
        pwd == pwd2 &&
        userName != ''
    )
}

export function isEmailValid(email) {
    return emailRule.rule.test(email)
}
