import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Spinner } from 'reactstrap';
import './HeatMapChart.css'

class App extends Component {
  render() {
    const { Data, checkResponse } = this.props
    const options = {
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      yaxis: {
        show: false //xóa bỏ phần yaxis phía bên trái
      },
    }
    return (
      <div className="heat-map-chart">
        <div className='heat-map-chart-title'>
          <h4>Device by hour</h4>
        </div>
        {checkResponse === false ?
          <div className='flex-center-3'>
            <div className='total-spinner-3'><h3>Waiting for backend</h3>
              <Spinner className='spinner-3' color="info" />
            </div>
          </div>
          :
          <div className='info-chart'>
          <Chart
            options={options}
            series={Data}
            type="heatmap"
            width="1000px"
          />
          </div>
        }
      </div>
    );
  }
}

export default App;
