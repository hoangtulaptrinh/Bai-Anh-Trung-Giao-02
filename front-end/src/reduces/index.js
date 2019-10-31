import { combineReducers } from 'redux';

import dataPieChart from './daTaPieChart'
const myReducer = combineReducers({
  dataPieChart: dataPieChart,
});

export default myReducer;