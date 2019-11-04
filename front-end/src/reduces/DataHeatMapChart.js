import actionTypes from '../const/actionTypes';

var initialState = {
  data: [],
  checkResponse: false
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.getDataHeatMapChart:
      return {
        data: action.data,
        checkResponse: action.checkResponse
      };

    default:
      return state;
  }
}

export default myReducer;