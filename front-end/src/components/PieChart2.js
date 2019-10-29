import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import './PieChart2.css';

class PieChart2 extends Component {
  render() {
    const { Data } = this.props
    const colorArr = ["green", "navy", "cyan",]
    return (
      <div className='PieChart2'>
        <div className='PieChart2-Title'>
          <h4>Top 1</h4>
        </div>
        <div className='Total-Chart-2'>
          <VictoryPie
            labels={[]} //đễ rỗng để ẩn đi label
            sortKey={['y']}
            innerRadius={120}
            colorScale={colorArr}
            data={Data}
          />
          <div className='Total-Info-2'>
            {
              Data.map((item, index) => (
                <div className='Info-2' key={index} >
                  <div className='SmartPhone-2' style={{ background: colorArr[index] }} />
                  {/* check nếu tồn tại (tức là đã get Api đó) */}
                  {item.x !== undefined ?
                    <div className='Info-item-2'>
                      <h5>{item.x}</h5>
                      <h5>{item.y} %</h5>
                    </div>
                    : null
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PieChart2;