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
          domainPadding={{ x: 8 }}
          padding={{ top: 10, bottom: 20, left: 60 }}
        // range={{ x: [60, 450], y: [50, 200] }}
        >
          {/* xóa bỏ cột Y  */}
          <VictoryAxis
            // range={{ x: [50, 250], y: [50, 200] }}
            offsetY
          />
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