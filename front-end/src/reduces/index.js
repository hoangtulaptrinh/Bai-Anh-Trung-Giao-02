import { combineReducers } from 'redux';

import DataPieChart from './DaTaPieChart'
import DataHorizontalChart from './DataHorizontalChart'
import DataLineChart from './DataLineChart'
import DataPieChart2 from './DaTaPieChart2'

const myReducer = combineReducers({
  DataPieChart: DataPieChart,
  DataHorizontalChart: DataHorizontalChart,
  DataLineChart: DataLineChart,
  DataPieChart2: DataPieChart2
});

export default myReducer;