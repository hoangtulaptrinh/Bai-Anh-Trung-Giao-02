import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Header/Navbar';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
  </Provider>
  ,
  document.getElementById('root'));

serviceWorker.unregister();