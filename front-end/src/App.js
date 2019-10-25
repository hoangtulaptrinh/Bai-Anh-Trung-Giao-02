import React, { Component } from 'react';
import * as actions from './actions/index';
import { connect } from 'react-redux';
import * as apiCaller from './api/apiCaller'
import './App.css';
import PieChart from './components/PieChart'

class App extends Component {
  componentDidMount() {
    apiCaller.Params('/api/get_data_pie_chart', 'get', null).then(response => this.props.GET_DATA_PIE_CHART(response.data))
  }
  render() {
    const { DataPieChart } = this.props
    const colorArr = ["cyan", "navy"]
    return (
      <div className='App'>
        <PieChart Data={DataPieChart} colorArr={colorArr} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    DataPieChart: state.DataPieChart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    GET_DATA_PIE_CHART: (data) => dispatch(actions.GET_DATA_PIE_CHART({ data: data }))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);