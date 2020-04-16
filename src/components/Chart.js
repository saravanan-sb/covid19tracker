import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (data) => {
    let active = '';
    let confirmed = '';
    let deaths = '';
    let state = ''



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
    return (



        <div className='container'>
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
            ></Bar>
        </div>

    )
}

export default Chart;