import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import myReducer from './reduces/index';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Header/Navbar';

const store = createStore(
  myReducer,
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
  </Provider>
  ,
  document.getElementById('root'));

serviceWorker.unregister();