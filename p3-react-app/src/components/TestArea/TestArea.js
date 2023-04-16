import React from 'react'
import Gallery from '../Molecules/Gallery/Gallery'
import GalleryDrop from '../Molecules/Gallery/GalleryDrop'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { apiCalls } from '../../scripts/apicalls'
function Games() {

  const [uniqsOnSale, setUniqsOnSale] = useState(null);

  useEffect(() => {
    const getUniqsOnSale = async () => {
      const data = await apiCalls.getUniqsOnSale();
      setUniqsOnSale(data);
    };
    getUniqsOnSale();
  }, []);

  return (

    uniqsOnSale != null &&(
      <Box>
      <GalleryDrop title='On sale'>
      <Gallery array={uniqsOnSale} amount={10} type='uniqsOnSale'/>
      </GalleryDrop>
      </Box>
      )
  )
}

export default Games