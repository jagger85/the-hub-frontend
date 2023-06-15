import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { Typography } from '@mui/material'
import { styles } from './TransactionStyle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function Transfer(props) {
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
                    From : {props.transaction.act.data.from}
                </Typography>
                <Typography>To : {props.transaction.act.data.to}</Typography>
                <Typography>
                    Amount : {props.transaction.act.data.quantity}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Transfer
