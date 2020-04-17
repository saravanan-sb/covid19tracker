import React from 'react';
import CountUp from 'react-countup';

const Cards = (data) => {
    let active = '';
    let confirmed = '';
    let deaths = '';

    if (data.districtInfo && data.districtInfo[0]) {
        active = '0'
        confirmed = data.districtInfo[0].confirmed;
        deaths = '0'
    } else {
        active = data.data.active;
        confirmed = parseInt(data.data.confirmed);
        deaths = data.data.deaths;
    }

    if (!active) return null
    return (
        <div className="container s12 m12">
            <div className="row">
            
                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-title align center count-text">Confirmed</div>
                        <div className="card-content">
                            <h1 className='center align green-text count'>
                                <CountUp start={0} end={confirmed} duration={2.5} seperator=',' />
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-title align center count-text">Quarantined</div>
                        <div className="card-content">
                            {
                                active === '0' ? (
                                    <h1 className='center align blue-text count'>NA</h1>
                                ) : (
                                        <h1 className='center align blue-text count'>
                                            <CountUp start={0} end={parseInt(active)} duration={2.5} seperator=',' />
                                        </h1>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-title align center count-text">Deaths</div>
                        <div className="card-content">
                            {
                                active === '0' ? (
                                    <h1 className='center align red-text count'>NA</h1>
                                ) : (
                                        <h1 className='center align red-text count' >
                                            <CountUp start={0} end={parseInt(deaths)} duration={2.5} seperator=',' />
                                        </h1>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;