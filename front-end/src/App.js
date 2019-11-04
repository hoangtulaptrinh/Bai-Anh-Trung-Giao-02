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
    const { dataPieChart } = this.props
    const colorArr = ["tomato", "orange", "gold", "cyan", "navy", "green"]
    return (
      <div className='App'>
        <PieChart Data={dataPieChart.data} checkResponse={dataPieChart.checkResponse} colorArr={colorArr} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    dataPieChart: state.dataPieChart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => { dispatch(actions.getApi()) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);