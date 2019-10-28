import { combineReducers } from 'redux';

import DataPieChart from './DaTaPieChart'
import DataHorizontalChart from './DataHorizontalChart'
import DataLineChart from './DataLineChart'
const myReducer = combineReducers({
  DataPieChart: DataPieChart,
  DataHorizontalChart: DataHorizontalChart,
  DataLineChart : DataLineChart
});

export default myReducer;