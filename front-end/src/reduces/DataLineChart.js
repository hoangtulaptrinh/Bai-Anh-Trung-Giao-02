import actionTypes from '../const/actionTypes';

var initialState = {
  data: [],
  checkResponse: false
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.getDataLineChart:
      return {
        data: action.data,
        checkResponse: action.checkResponse
      };

    case actionTypes.showLoading:
      return {
        data: state.data,
        checkResponse: false
      }

    default:
      return state;
  }
}

export default myReducer;