import React, { Component } from 'react';
import * as actions from './actions/index';
import { connect } from 'react-redux';
import './App.css';
import PieChart from './components/PieChart'

class App extends Component {
  componentDidMount() {
    this.props.getApi();
  }
  render() {
    const { DataPieChart } = this.props
    const colorArr = ["tomato", "orange", "gold", "cyan", "navy", "green"]
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
    getApi: () => { dispatch(actions.GET_API()) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);