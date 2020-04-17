import axios from 'axios';

const url = 'https://api.covid19india.org/v2/state_district_wise.json'
const url2 = 'https://api.covid19india.org/data.json'

export const stateNames = async () => {
    try {
        const { data } = await axios.get(url);
        return data.map(state => state.state)
    } catch (error) {
        console.log(error)
    }
}

export const stateInfo = async (state) => {
    try {
        const { data: { statewise } } = await axios.get(url2)
        const info = statewise.filter(stateInfo => {
            return stateInfo.state === state
        })
        return info
    } catch (error) {
        console.log(error)
    }
}

export const districtInfo = async (state) => {
    try {
        if (state === 'null') {
            return null
        }
        const { data } = await axios.get(url);
        const info = data.filter(stateInfo => {
            return stateInfo.state === state
        })
        return info[0].districtData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data: { cases_time_series } } = await axios.get(url2);
        return cases_time_series;
    } catch (error) {
        console.log(error)
    }
}