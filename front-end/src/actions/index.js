import actionTypes from '../const/actionTypes';
import * as apiCaller from '../api/apiCaller'

export const GET_API = () => {
  return (dispatch) => {
    return apiCaller.Params('/api/get_data_pie_chart', 'get', null)
      .then(res => dispatch(GET_ALL_DATA(res.data)))
  }
}

export const GET_ALL_DATA = (data) => { return { type: actionTypes.GET_ALL_DATA, data: data } }