import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import './PieChart.css';

class PieChart extends Component {
  render() {
    const { Data, colorArr } = this.props
    let totalData;
    if(Data.length > 0) {
      const Total = (before, after) => before.y + after.y;
      totalData = Data.reduce(Total)
    }
    return (
      <div className='PieChart'>
        <div className='Pie'>
          <VictoryPie
            labels={[]} //đễ rỗng để ẩn đi label
            innerRadius={120}
            colorScale={colorArr}
            data={Data}
          />
        </div>
        <div className='Total-Info'>
          {
            Data.map((item, index) => (
              <div className='Info' key={index} >
                <div className='SmartPhone' style={{ background: colorArr[index] }} />
                {/* check nếu tồn tại (tức là đã get Api đó) */}
                {item.x !== undefined ?
                  <div className='info-item'>
                    <h3>{item.x}</h3>
                    <h3>{item.y/totalData*100} %</h3>
                  </div>
                  : null
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default PieChart;