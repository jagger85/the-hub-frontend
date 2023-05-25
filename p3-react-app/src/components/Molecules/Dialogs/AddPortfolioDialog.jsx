import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../Atoms/CustomInput';
import { styles as stl } from './DialogStyle';
import CyberButton from '../../Atoms/CyberButton';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { colors } from '../../../theme';
import CloseIcon from '@mui/icons-material/Close';
/**
 * @component - A dialog for setting the wallet to track
 * @param {boolean} props.close - To close the dialog
 * @param {boolean} props.open - To open the dialog
 * @returns
 */
function AddPortfolioDialog(props) {
  const [portfolioName, setPortfolioName] = useState('');

  const portfolioNameChanged = (e) => {
    setPortfolioName(e.target.value);
  };

  function isValid() {
    return portfolioName != '';
  }

  return (
    <Dialog onClose={() =>props.onClose(false)} open={props.open} fullWidth maxWidth='xs'>
      <Grid container sx={stl.container}>
        <Grid item sx={[stl.item, stl.title]}>
          <Typography variant='h7medium'>Add a new portafolio</Typography>
          <CloseIcon onClick={() =>props.onClose(false)} style={{color: colors.background[300]}} />
        </Grid>
        <Grid item sx={[stl.section,{display:'flex',justifyContent:'center',paddingBottom:0}]}>
        <Box sx={{padding: 2,borderRadius: '50%' ,border:1 , borderColor:colors.background[1000]}}>
        <CardTravelIcon style={{color:colors.background[300], fontSize: '5rem'}}/>
        </Box>
        </Grid>
        <Grid item sx={stl.section}>
          <CustomInput label='Enter a new alias' text={true} placeholder='Add your portfolio name' getValue={portfolioNameChanged} />
        </Grid>
        <Grid item sx={stl.bottom}>
          <CyberButton onClick={() => props.create(portfolioName)} disabled={!isValid()} right={false} textVariant='h8medium' text='ADD'/>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Dialog>
  );
}

export default AddPortfolioDialog;
// <Button onClick={() => props.create(portfolioName)} disabled={!isValid()}>
// <Typography>Add portfolio</Typography>
// </Button>