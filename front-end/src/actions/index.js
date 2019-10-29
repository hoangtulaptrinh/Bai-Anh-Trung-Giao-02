import actionTypes from '../const/actionTypes';
import * as apiCaller from '../api/apiCaller'

export const GET_API = () => {
  return (dispatch) => {
    apiCaller.Params('/api/get_data_pie_chart', 'get', null)
      .then(res => { dispatch(GET_DATA_PIE_CHART(res.data)) })
    apiCaller.Params('/api/get_data_horizontal_chart', 'get', null)
      .then(res => { dispatch(GET_DATA_HORIZONTAL_CHART(res.data)) })
    apiCaller.Params('/api/get_data_line_chart', 'get', null)
      .then(res => { dispatch(GET_DATA_LINE_CHART(res.data)) })
    apiCaller.Params('/api/get_data_pie_chart_2', 'get', null)
      .then(res => { dispatch(GET_DATA_PIE_CHART_2(res.data)) })
  }
}

export const GET_DATA_PIE_CHART = (data) => { return { type: actionTypes.GET_DATA_PIE_CHART, data: data } }

export const GET_DATA_HORIZONTAL_CHART = (data) => { return { type: actionTypes.GET_DATA_HORIZONTAL_CHART, data: data } }

export const GET_DATA_LINE_CHART = (data) => { return { type: actionTypes.GET_DATA_LINE_CHART, data: data } }

export const GET_DATA_PIE_CHART_2 = (data) => { return { type: actionTypes.GET_DATA_PIE_CHART_2, data: data } }