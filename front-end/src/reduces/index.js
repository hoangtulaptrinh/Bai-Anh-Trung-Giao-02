import { combineReducers } from 'redux';

import dataPieChart from './DaTaPieChart'
import dataRankingChart from './DataRankingChart'
import dataHeatMapChart from './DataHeatMapChart'
import dataDateRangePicker from './DataDateRangePicker'

const myReducer = combineReducers({
  dataPieChart: dataPieChart,
  dataRankingChart: dataRankingChart,
  dataHeatMapChart: dataHeatMapChart,
  dataDateRangePicker: dataDateRangePicker
});

export default myReducer;