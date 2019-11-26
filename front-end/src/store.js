import { createStore, applyMiddleware } from 'redux';
import myReducer from './reduces/index';
import thunk from 'redux-thunk'

const store = createStore(
  myReducer,
  applyMiddleware(thunk),
)

export default store;