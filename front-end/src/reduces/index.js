import { combineReducers } from 'redux';

import dataPieChart from './DaTaPieChart'
import dataRankingChart from './DataRankingChart'
import dataHeatMapChart from './DataHeatMapChart'
import dataDateRangePicker from './DataDateRangePicker'
import dataLineChart from './DataLineChart'

const myReducer = combineReducers({
  dataPieChart: dataPieChart,
  dataRankingChart: dataRankingChart,
  dataHeatMapChart: dataHeatMapChart,
  dataDateRangePicker: dataDateRangePicker,
  dataLineChart: dataLineChart
});

export default myReducer;