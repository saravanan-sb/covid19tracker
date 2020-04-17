import React from 'react';
import CountUp from 'react-countup';

const Cards = (data) => {
    console.log(data)
    let recovered = '';
    let confirmed = '';
    let deaths = '';
    let deltaConfirmed = '';
    let deltaRecovered = '';
    let deltaDeaths = '';

    if (data.districtInfo && data.districtInfo[0]) {
        deltaDeaths = '0'
        deltaRecovered = '0'
        deltaConfirmed = data.districtInfo[0].delta.confirmed;
        recovered = '0'
        confirmed = data.districtInfo[0].confirmed;
        deaths = '0'
    } else {
        deltaDeaths = data.data.deltadeaths;
        deltaRecovered = data.data.deltarecovered;
        deltaConfirmed = data.data.deltaconfirmed;
        recovered = data.data.recovered;
        confirmed = parseInt(data.data.confirmed);
        deaths = data.data.deaths;
    }

    if (!confirmed) return null
    return (

        <div className="s12 m12">
            <p className='last-update'>*last updated: {data.data.lastupdatedtime}</p>
            <div className="row">
                <div className="col s4 m4 cards">
                    <div className="card ">
                        <div className="card-title align center count-text">Infected</div>
                        <div className="card-content">
                            <div >
                                <p className='align center blue-text darken-4 countdelta'>
                                    <i className='material-icons'>arrow_upward</i>
                                    <CountUp start={0} end={parseInt(deltaConfirmed)} duration={2.5} seperator=',' />
                                </p>
                            </div>
                            <h1 className='center align blue-text count'>
                                <CountUp start={0} end={confirmed} duration={2.5} seperator=',' />
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col s4 m4 cards">
                    <div className="card ">
                        <div className="card-title align center count-text">Recovered</div>
                        <div className="card-content">
                            <div >
                                {
                                    deltaRecovered === '0' ? (
                                        <p className='center align green-text countdelta'>NA</p>
                                    ) : (
                                            <p className='align center green-text darken-4 countdelta'>
                                                <i className='material-icons'>arrow_upward</i>
                                                <CountUp start={0} end={parseInt(deltaRecovered)} duration={2.5} seperator=',' />
                                            </p>
                                        )
                                }
                            </div>
                            {
                                recovered === '0' ? (
                                    <h1 className='center align green-text count'>NA</h1>
                                ) : (
                                        <h1 className='center align green-text count'>
                                            <CountUp start={0} end={parseInt(recovered)} duration={2.5} seperator=',' />
                                        </h1>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className="col s4 m4 cards">
                    <div className="card ">
                        <div className="card-title align center count-text">Deaths</div>
                        <div className="card-content">
                            <div >
                                {
                                    deltaRecovered === '0' ? (
                                        <p className='center align red-text countdelta'>NA</p>
                                    ) : (
                                            <p className='align center red-text darken-4 countdelta'>
                                                <i className='material-icons'>arrow_upward</i>
                                                <CountUp start={0} end={parseInt(deltaDeaths)} duration={2.5} seperator=',' />
                                            </p>
                                        )
                                }

                            </div>
                            {
                                recovered === '0' ? (
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