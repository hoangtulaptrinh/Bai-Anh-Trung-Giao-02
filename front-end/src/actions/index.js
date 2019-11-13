import actionTypes from '../const/actionTypes';
import * as apiCaller from '../api/apiCaller'

export const getApi = (data) => {
  let objDate;
  if (data !== undefined) {
    objDate = {
      from_date: data.startTime,
      to_date: data.endTime
    }
  }
  return (dispatch) => {
    apiCaller.request_infused_by_params('/api/get_data_pie_chart', 'get', objDate)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataPieChart(res.data, true))
        }
      })
    apiCaller.request_infused_by_params('/api/get_data_ranking_chart', 'get', objDate)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataRankingChart(res.data, true))
        }
      })
    apiCaller.request_infused_by_params('/api/get_data_heat_map_chart', 'get', objDate)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataHeatMapChart(res.data, true))
        }
      })
    apiCaller.request_infused_by_params('/api/get_name_os_arr', 'get', null)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getNameOsArr(res.data))
        }
      })
  }
}


export const getDataPieChart = (data, checkResponse) => { return { type: actionTypes.getDataPieChart, data: data, checkResponse: checkResponse } }

export const getDataRankingChart = (data, checkResponse) => { return { type: actionTypes.getDataRankingChart, data: data, checkResponse: checkResponse } }

export const getDataHeatMapChart = (data, checkResponse) => { return { type: actionTypes.getDataHeatMapChart, data: data, checkResponse: checkResponse } }

export const setDateRangePicker = (data) => { return { type: actionTypes.setDateRangePicker, data: data } }

export const showLoading = () => { return { type: actionTypes.showLoading } }

export const setOsChoose = (nameOs) => { return { type: actionTypes.setOsChoose, nameOs: nameOs } }

export const getDataPieChartChooseByOs = (data) => {
  let objChooseOs = data;
  return (dispatch) => {
    apiCaller.request_infused_by_params('/api/get_data_pie_chart_choose_by_os', 'get', objChooseOs)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataPieChart(res.data, true))
        }
      })
  }
}

export const showLoadingPieChart = () => { return { type: actionTypes.showLoadingPieChart } }

export const getNameOsArr = (nameOsArr) => { return { type: actionTypes.getNameOsArr, nameOsArr: nameOsArr } }