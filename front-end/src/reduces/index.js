import { combineReducers } from 'redux';

import dataPieChart from './DaTaPieChart'
import dataRankingChart from './DataRankingChart'
import dataHeatMapChart from './DataHeatMapChart'
const myReducer = combineReducers({
  dataPieChart: dataPieChart,
  dataRankingChart: dataRankingChart,
  dataHeatMapChart: dataHeatMapChart
});

export default myReducer;