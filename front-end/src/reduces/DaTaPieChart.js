import actionTypes from '../const/actionTypes';
import _ from 'lodash'
var initialState = {
  data: [],
  checkResponse: false,
  nameOsArr: [],
  currentOsChoose: []
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.getDataPieChart:
      return {
        data: action.data,
        checkResponse: action.checkResponse,
        nameOsArr: state.nameOsArr,
        currentOsChoose: state.currentOsChoose
      };

    case actionTypes.showLoading:
      return {
        data: state.data,
        checkResponse: false,
        nameOsArr: state.nameOsArr,
        currentOsChoose: state.currentOsChoose
      }

    case actionTypes.showLoadingPieChart:
      return {
        data: state.data,
        checkResponse: false,
        nameOsArr: state.nameOsArr,
        currentOsChoose: state.currentOsChoose
      }

    case actionTypes.getNameOsArr:
      state.nameOsArr = _.map(action.nameOsArr, (n) => ({
        x: n.x,
        isChoose: true
      }))

      return state;

    case actionTypes.setOsChoose:
      let indexOs = _.findKey(state.nameOsArr, ['x', action.nameOs]);
      state.nameOsArr[indexOs].isChoose = !state.nameOsArr[indexOs].isChoose
      return state;

    case actionTypes.setCurrentOsChoose:
      state.currentOsChoose = action.dataOsChoose;
      return state;

    default:
      return state;
  }
}

export default myReducer;