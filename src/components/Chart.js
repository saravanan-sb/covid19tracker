import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../api'

const Chart = (data) => {
    let active = '';
    let confirmed = '';
    let deaths = '';
    let state = ''

    const [dailyData, setdailyData] = useState([]);

    useEffect(() => {
        const fetchDataApi = async () => {
            setdailyData(await fetchDailyData())
        }
        fetchDataApi();
    }, [])


    if (data.districtInfo && data.districtInfo[0]) {
        active = '0'
        confirmed = data.districtInfo[0].confirmed;
        deaths = '0'
        state = data.districtInfo[0].district;
    } else {
        active = data.data.active;
        confirmed = parseInt(data.data.confirmed);
        deaths = data.data.deaths;
        state = data.data.state
    }


    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(data => data.date.slice(0, 6)),
                    datasets: [{
                        data: dailyData.map(data => data.totalconfirmed),
                        label: 'Confirmed',
                        borderColor: 'blue',
                        fill: true
                    }, {
                        data: dailyData.map(data => data.totalrecovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        fill: true
                    }, {
                        data: dailyData.map(data => data.totaldeceased),
                        label: 'Deaths',
                        borderColor: 'red',
                        fill: true
                    }]
                }}
            />
        ) : null
    )

    const barChart = (
        <Bar
            data={{
                labels: ['active', 'confirmed', 'deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['blue', 'green', 'red'],
                    data: [active, confirmed, deaths]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current Place: ${state}` }
            }}
        />
    )

    const renderData = state === 'Total' ? (lineChart) : (barChart)
    return (
        <div className='container s12 m12'>
            {renderData}
        </div>
    )
}

export default Chart;