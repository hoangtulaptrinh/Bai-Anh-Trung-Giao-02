import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryLabel, VictoryAxis } from 'victory';
import './HorizontalChart.css';

class HorizontalChart extends Component {
  render() {
    const { Data } = this.props
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
            data={Data}
            labelComponent={<VictoryLabel dx={-35} />} //cho lùi lại 35px để số vào trong hàng
          />
        </VictoryChart>
      </div>
    );
  }
}

export default HorizontalChart;