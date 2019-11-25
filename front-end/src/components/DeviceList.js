import React from 'react';
import './DeviceList.css';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import _ from 'lodash'

function DeviceList(props) {
  var deviceList = document.getElementById("id-device-list");
  var divStyle = {
    height: window.innerHeight - (deviceList && deviceList.offsetTop)
  }
  return (
    <div className='device-list' style={divStyle} id='id-device-list'>
      {props.dataPieChart.checkResponse === false ?
        <div className='flex-center-4'>
          <div className='total-spinner-4'><h3>Waiting for backend</h3>
            <Spinner className='Spinner-4' color="info" />
          </div>
        </div>
        :
        //
        <div className='body-device-list'>
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>OS</th>
                  <th>Percent</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
                {_.map(props.dataPieChart.data, (item, index) =>
                  (
                    <tr key={index}>
                      <td>{item.x}</td>
                      <td>{item.y}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        //
      }
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    dataPieChart: state.dataPieChart,
  }
}

export default connect(mapStatetoProps)(DeviceList);