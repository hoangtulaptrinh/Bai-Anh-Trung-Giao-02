import React, { Component } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryStack } from 'victory';
import './LineChart.css';

class LineChart extends Component {
  render() {
    const { Data, colorArr } = this.props
    return (
      <div className='LineChart'>
        <div className='LineChart-Title'>
          <h4>Ranking</h4>
        </div>
        <VictoryStack>
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ y: [0, 12] }}
          >
            {
              Data.map((item,index) =>(
              <VictoryLine key={index}
                style={{ data: { stroke: colorArr[index], strokeWidth: 5, strokeLinecap: "round" } }}
                data={item}
              />))
            }
          </VictoryChart>
        </VictoryStack>
      </div>
    );
  }
}

export default LineChart;