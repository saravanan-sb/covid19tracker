import React, { Component } from 'react';
import Intropage from './components/Intropage';
import Tracker from './components/Tracker';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { stateInfo, districtInfo } from './api';
import Chart from './components/Chart';

class App extends Component {
  state = {
    data: [],
    listDistricts: [],
    districtInfo: []
  }

  async componentDidMount() {
    const listDistricts = await districtInfo('null');
    const data = await stateInfo('Total');
    this.setState({
      data: data[0],
      listDistricts,
    })
  }

  handleStateChange = async (state) => {
    const data = await stateInfo(state)
    const distInfo = await districtInfo(state);

    this.setState({
      data: data[0],
      listDistricts: distInfo
    })
  }

  handleDistrictChange = async (dist) => {
    const districtInfo = this.state.listDistricts.filter(district => {
      return district.district === dist;
    })
    this.setState({
      districtInfo: districtInfo
    })
    console.log(this.state.districtInfo)
  }

  render() {
    return (
      <div className="App">
        <Intropage />
        <Tracker handleStateChange={this.handleStateChange}
          distInfo={this.state.listDistricts}
          handleDistrictChange={this.handleDistrictChange}
        />
        <Chart
          data={this.state.data}
          districtInfo={this.state.districtInfo}
        />
        <Cards
          data={this.state.data}
          districtInfo={this.state.districtInfo}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;


