import React, { Component } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryStack } from 'victory';
import './LineChart.css';

class LineChart extends Component {
  render() {
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
            <VictoryLine
              style={{ data: { stroke: "tomato", strokeWidth: 5, strokeLinecap: "round" } }}
              data={[{ x: '2019-07-01', y: 3 } ,{ x: '2019-08-8', y: 2 },{ x: '2019-09-15', y: 1 },{ x: '2019-10-23', y: 6 }]}
            />
            <VictoryLine
              style={{ data: { stroke: "orange", strokeWidth: 5, strokeLinecap: "round" } }}
              data={[{ x: '2019-07-01', y: 6 } ,{ x: '2019-08-8', y: 3 },{ x: '2019-09-15', y: 9 },{ x: '2019-10-23', y: 12 }]}
            />
            <VictoryLine
              style={{ data: { stroke: "gold", strokeWidth: 5, strokeLinecap: "round" } }}
              data={[{ x: '2019-07-01', y: 1 } ,{ x: '2019-08-8', y: 3 },{ x: '2019-09-15', y: 5 },{ x: '2019-10-23', y: 2 }]}
            />
            <VictoryLine
              style={{ data: { stroke: "cyan", strokeWidth: 5, strokeLinecap: "round" } }}
              data={[{ x: '2019-07-01', y: 11 } ,{ x: '2019-08-8', y: 6 },{ x: '2019-09-15', y: 2 },{ x: '2019-10-23', y: 9 }]}
            />
            <VictoryLine
              style={{ data: { stroke: "navy", strokeWidth: 5, strokeLinecap: "round" } }}
              data={[{ x: '2019-07-01', y: 4 } ,{ x: '2019-08-8', y: 4 },{ x: '2019-09-15', y: 1 },{ x: '2019-10-23', y: 6 }]}
            />
            <VictoryLine
              style={{ data: { stroke: "green", strokeWidth: 5, strokeLinecap: "round" } }}
              data={[{ x: '2019-07-01', y: 7 } ,{ x: '2019-08-8', y: 9 },{ x: '2019-09-15', y: 7 },{ x: '2019-10-23', y: 10 }]}
            />
          </VictoryChart>
        </VictoryStack>
      </div>
    );
  }
}

export default LineChart;