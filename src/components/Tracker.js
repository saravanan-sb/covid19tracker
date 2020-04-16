import React, { useState, useEffect } from 'react';
import { stateNames } from '../api';

const Tracker = ({ handleStateChange, distInfo, handleDistrictChange }) => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        const data = async () => {
            setstate(await stateNames());
        }
        data()
    }, [setstate])


    return (
        <div className='container select'>
            <label className='black-text'>Statewise Statistics</label>
            <select className="browser-default col s12" onChange={(e) => handleStateChange(e.target.value)}>
                <option value="Total" defaultValue>All over India</option>
                {
                    state.length ? (state.map((state, i) => {
                        return <option key={i} value={state}>{state}</option>
                    })) : ('loading')
                }
            </select>
            <div className="container select">
                <label className='black-text'>District wise Reports</label>
                <select className="browser-default col s12" onChange={(e) => handleDistrictChange(e.target.value)}>
                    <option value="district" defaultValue>Select District</option>
                    {
                        distInfo && distInfo.length ? (distInfo.map((distInfo, i) => {
                            return <option key={i} value={distInfo.district}>{distInfo.district}</option>
                        })) : ('loading')
                    }
                </select>
            </div>
        </div>
    )
}

export default Tracker;