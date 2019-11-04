import { combineReducers } from 'redux';

import dataPieChart from './DaTaPieChart'
import dataRankingChart from './DataRankingChart'

const myReducer = combineReducers({
  dataPieChart: dataPieChart,
  dataRankingChart: dataRankingChart
});

export default myReducer;