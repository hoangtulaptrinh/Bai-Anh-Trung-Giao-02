import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Spinner, Progress } from 'reactstrap';
import './HeatMapChart.css'
import _ from 'lodash'

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
    var total = function totalValue(index) {
      if (checkResponse === true)
        return _.reduce(Data[index].data, function (sum, n) {
          return sum + n.y;
        }, 0)
    }
    let maxValue = total(0);
    for (let i = 0; i++; i <= Data.length) {
      if (total(i) > maxValue)
        maxValue = total(i)
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
            <div className='total-progress'>
              {
                Data.map((item, index) => (
                  <div key={index}>
                    <h5>{item.name}</h5>
                    <Progress animated color='info' value={total(index)} max={maxValue} >
                      {total(index)}
                    </Progress>
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
