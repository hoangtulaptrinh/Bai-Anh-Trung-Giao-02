import actionTypes from '../const/actionTypes';

var initialState = {
  startTime: '',
  endTime: ''
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.setDateRangePicker:
      return {
        startTime: action.data.startDate,
        endTime: action.data.endDate
      };

    default:
      return state;
  }
}

export default myReducer;