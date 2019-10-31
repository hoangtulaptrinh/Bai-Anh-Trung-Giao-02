import actionTypes from '../const/actionTypes';
import * as apiCaller from '../api/apiCaller'

export const getApi = () => {
  return (dispatch) => {
    return apiCaller.request_infused_by_params('/api/get_data_pie_chart', 'get', null)
      .then(res => dispatch(getDataPieChart(res.data)))
  }
}

export const getDataPieChart = (data) => { return { type: actionTypes.getDataPieChart, data: data } }