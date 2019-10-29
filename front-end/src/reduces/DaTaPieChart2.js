import actionTypes from '../const/actionTypes';

var initialState = []

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_DATA_PIE_CHART_2:
      return state = action.data;

    default:
      return state;
  }
}

export default myReducer;