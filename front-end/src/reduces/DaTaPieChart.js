import actionTypes from '../const/actionTypes';

var initialState = []

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_ALL_DATA:
      console.log(action)
      return state = action.arr.data;

    default:
      return state;
  }
}

export default myReducer;