import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import myReducer from './reduces/index';
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(
  myReducer,
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));

serviceWorker.unregister();