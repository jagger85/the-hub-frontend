import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import { colors } from '../../theme'

function PieBalance(props) {
    const [data, setData] = useState(props.balances)

    let options = {
        color: [
            colors.purple[500],
            colors.purple[800],
            colors.purple[300],
            colors.purple[400],
            colors.purple[100],
            colors.purple[200],
            colors.purple[100],
            colors.purple[100],
            colors.purple[100],
            colors.purple[100],
        ],

        tooltip: {
            trigger: 'item',
            backgroundColor: colors.background[500],
            borderColor: colors.background[800],
            textStyle: {
                color: 'white',
            },
        },
        legend: {
            orient: 'vertical',
            bottom: '15%',
            left: 10,
            icon: 'rect',
            textStyle: {
                color: 'white',
            },
        },
        series: [
            {
                name: 'Balance',
                type: 'pie',
                radius: ['45%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                data: data,
            },
        ],
    }

    useEffect(() => {
        setData(props.balances)
    }, [props])

    return <ReactEcharts style={{ height: '120px' }} option={options} />
}

export default PieBalance
