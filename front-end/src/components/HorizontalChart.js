import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryLabel, VictoryAxis } from 'victory';
import './HorizontalChart.css';

class HorizontalChart extends Component {
  render() {
    const data = [
      { x: 'Day 1', y: 13000 },
      { x: 'Day 2', y: 16500 },
      { x: 'Day 3', y: 14250 },
      { x: 'Day 4', y: 19000 },
      { x: 'Day 5', y: 13000 },
      { x: 'Day 6', y: 16500 },
    ];
    return (
      <div className='HorizontalChart'>
        <div className='HorizontalChart-Title'>
          <h4>Ranking</h4>
        </div>
        <VictoryChart
          domainPadding={{ x: 6 }}
        >
          {/* xóa bỏ cột Y  */}
          <VictoryAxis offsetY />
          <VictoryBar horizontal
            labels={({ datum }) => datum.y}
            style={{ data: { fill: "#EFE4FE" }, }}
            data={data}
            labelComponent={<VictoryLabel dx={-35} />} //cho lùi lại 35px để số vào trong hàng
          />
        </VictoryChart>
      </div>
    );
  }
}

export default HorizontalChart;