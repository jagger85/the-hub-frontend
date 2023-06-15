import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import { Skeleton } from '@mui/material'
import { apiCalls } from '../../utils/apicalls'
import { unzip } from '../../utils/unzipper'

function UniqImage(props) {
    const [img, setImage] = useState(null)

    useEffect(() => {
        const init = async () => {
            let url = await apiCalls.getUniqImgUrl(props.id)
            let unziped = await unzip(url)
            setImage(unziped)
            console.count('Uniq image')
        }
        init()
    }, [])

    return img ? (
        <img width={150} height={150} src={img} alt="Downloaded Image" />
    ) : (
        <Skeleton />
    )
}

export default UniqImage
