import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { Typography } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { styles } from './TransactionStyle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

function Buy(props) {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Accordion
            key={uuid()}
            sx={styles.transactionContainer}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {props.transaction.act.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    I am an accordion
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>Type : {props.transaction.act.name}</Typography>
                <Typography>
                    Token id : {props.transaction.act.data.buy.token_id}
                </Typography>
                {/** 
    <Typography>Buyer : {e.act.data.buy.buyer}</Typography>
  */}
                <Typography>
                    Receiver : {props.transaction.act.data.buy.receiver}
                </Typography>
                <Typography>
                    Price : {props.transaction.act.data.buy.max_price}
                </Typography>
                {/** 
  <Typography> Promoter id : {e.act.data.buy.promoter_id}
  </Typography>
*/}
            </AccordionDetails>
        </Accordion>
    )
}

export default Buy
