import React, { Component } from 'react';
import * as actions from './actions/index';
import { connect } from 'react-redux';
import './App.css';
import PieChart from './components/PieChart'
import RankingChart from './components/RankingChart'
import HeatMapChart from './components/HeatMapChart'
import DatePicker from './components/DateRangePicker'

class App extends Component {
  componentDidMount() {
    this.props.getApi();
  }
  render() {
    const { dataPieChart, dataRankingChart, dataHeatMapChart } = this.props
    const colorArr = ["tomato", "orange", "gold", "cyan", "navy", "green"]
    return (
      <div className='App'>
        <div className='date-range'>
          <DatePicker />
        </div>
        <div className='row-1'>
          <PieChart Data={dataPieChart.data} checkResponse={dataPieChart.checkResponse} colorArr={colorArr} />
          <RankingChart Data={dataRankingChart.data} checkResponse={dataRankingChart.checkResponse} />
        </div>
        <div className='row-2'>
          <HeatMapChart Data={dataHeatMapChart.data} checkResponse={dataHeatMapChart.checkResponse} />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    dataPieChart: state.dataPieChart,
    dataRankingChart: state.dataRankingChart,
    dataHeatMapChart: state.dataHeatMapChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => { dispatch(actions.getApi()) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);