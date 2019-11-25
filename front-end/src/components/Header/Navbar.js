import React, { useEffect } from 'react';
import DatePicker from '../DateRangePicker'
import './Navbar.css';
import {
  BrowserRouter as Router, Switch, Route, NavLink
} from "react-router-dom";
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import Analysis from '../../Analysis'
import DeviceList from '../DeviceList'

function Navbar(props) {
  //để tham số thứ 2 là [] để vô hiệu hóa componentdidupdate tránh lỗi render vô hạn
  useEffect(() => {
    props.getApi();
  }, [])
  return (
    <Router>
      <div className='boss'>
        <div className='nav-bar'>
          <div className='switch-router'>
            {/* activeClassName='activeUrl' khi link nào ược nhấp thì sẽ thêm class activeUrl */}
            <NavLink activeClassName='activeUrl' to="/analysis">Analysis</NavLink>
            <NavLink activeClassName='activeUrl' to="/device-list">Device List</NavLink>
          </div>
          <DatePicker />
        </div>
        <Switch>
          {/* nhớ luồn luôn dùng exact để tránh lỗi không mong muốn */}
          <Route exact path="/analysis">
            <Analysis />
          </Route>
          <Route exact path="/device-list">
            <DeviceList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const mapStatetoProps = (state) => {
  return {
    dataPieChart: state.dataPieChart,
    dataRankingChart: state.dataRankingChart,
    dataHeatMapChart: state.dataHeatMapChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => { dispatch(actions.getApi()) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);