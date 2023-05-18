import React from 'react'
import MyBox from '../Atoms/MyBox'
import { dataService } from '../../scripts/dataService'
import { Box, Button } from '@mui/material'

function Games() {

  async function handleClick(){
   let data = await dataService.createUser('Rodolfo','someMail@mail.com','acomplexpassword')
   console.log(data)
  }


  return (
        <Box>
        <Button onClick={()=> handleClick()}> Click me please</Button>
        </Box>

    )
}

export default Games