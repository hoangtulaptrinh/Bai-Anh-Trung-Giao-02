import { combineReducers } from 'redux';

import DataPieChart from './DaTaPieChart'
const myReducer = combineReducers({
    DataPieChart : DataPieChart,
});

export default myReducer;