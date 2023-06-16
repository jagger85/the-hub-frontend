import React from 'react'
import { Paper } from '@mui/material'
import ReactEcharts from 'echarts-for-react'
import { colors } from '../../../theme'
function LineChart() {
    let styles = {
        container: {
            backgroundColor: colors.background[1000],
        },
        chart: {},
    }

    let options = {
        backgroundColor: 'transparent',
        textStyle: {
            fontFamily: 'industry-bold',
            color: colors.background[400],
        },
        axisPointer: {
            show: true,
            type: 'none',
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: true,
        },
        yAxis: {
            show: true,
            type: 'value',
            axisLine: {
                show: true,
            },
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                symbol: 'none',
            },
        ],
    }

    return (
        <Paper sx={styles.container}>
            <ReactEcharts sx={styles.chart} option={options} />
        </Paper>
    )
}

export default LineChart
