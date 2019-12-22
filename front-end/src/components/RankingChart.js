import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryLabel, VictoryAxis } from 'victory';
import { Spinner } from 'reactstrap';
import './RankingChart.css';

class RankingChart extends Component {
  render() {
    const { Data, checkResponse } = this.props
    return (
      <div className='ranking-chart'>
        <div className='ranking-chart-title'>
          <h4>Ranking</h4>
        </div>
        {checkResponse === false ?
          <div className='flex-center-2'>
            <div className='total-spinner-2'><h3>Waiting for backend</h3>
              <Spinner className='spinner-2' color="info" />
            </div>
          </div>
          :
          <VictoryChart
            domainPadding={{ x: 8 }}
            padding={{ top: 10, bottom: 20, left: 70 }}
          // range={{ x: [60, 450], y: [50, 200] }}
          >
            {/* xóa bỏ cột Y  */}
            <VictoryAxis
              // range={{ x: [50, 250], y: [50, 200] }}
              // offsetY
            />
            <VictoryBar horizontal
              labels={({ datum }) => datum.y}
              style={{ data: { fill: "#EFE4FE" }, }}
              data={Data}
              labelComponent={<VictoryLabel dx={-56} />} //cho lùi lại 56px để số vào trong hàng
            />
          </VictoryChart>
        }
      </div>
    );
  }
}

export default RankingChart;