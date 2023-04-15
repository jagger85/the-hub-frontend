import React from 'react'
import { useReducer, useEffect, useState } from "react";
import { Grid,Typography, Button } from '@mui/material';
import  UniqOnSale  from '../Marketplace/UniqOnSale'
import Transaction from '../Transactions/Transaction';
import { styles } from './GalleryStyle'
const pages = []

const reducer = (page, action) => {
  switch (action.type) {
    case 'increment':
      return {count: page.count +1}
    case "decrement":
      return {count: page.count -1}
    default:
      console.log(action.type + " this action is not supported");
  }
};
/**
 * 
 * @param {*} props
 * title
 * amount
 * array
 * type
 * @returns 
 */
function Gallery(props) {

    const [page, dispatch] = useReducer(reducer, { count : 0 });
    const [loading , setLoading] = useState(true)


    useEffect(()=>{
   
      for(let i=0; i < props.array.length / props.amount; i++){
        pages[i] = props.array.slice(i * props.amount, i * props.amount + props.amount )
        
    }
    setLoading(false)
    
  },[])
  return (
    !loading && (
      <Grid container spacing={2}>
        <Grid item xs={12} >
        <Typography variant="h5">{props.title}</Typography>
        </Grid>
        <Grid item xs={12}>
        {
            
            pages[page.count].map((e, i) => {
                switch(props.type){
                    case 'transactions':
                        return <Transaction transaction={e} />
                        case 'uniqsOnSale':
                            return <UniqOnSale uniq={e} />
                            case 'uniqsOwned':
                                return <UniqOwned uniq={e}/>
                                case 'collections':
                                    return <Collection collection={e} />
                                    default :
                                    console.log(`${props.type} not supported by gallery component`)
                                }
                            })}
                            </Grid>
                            <Grid item xs={12} sx={styles.galleryButtonContainer}>
                            <Button 
                            sx={styles.galleryButton}
                            variant="outlined" 
                            onClick={() =>{dispatch({ type: "decrement"})}}
                            disabled={page.count == 0}
                            >
                            back
                            </Button>
                            <Button 
                            sx={styles.galleryButton}
                            variant="outlined" 
                            onClick={() => {dispatch({ type: "increment" })}}
                            disabled={page.count == pages.length -1}>
                            forward
                            </Button>
                            </Grid>
                            
                        
                        </Grid>
                            )
                        )
                    }
                    
                    export default Gallery