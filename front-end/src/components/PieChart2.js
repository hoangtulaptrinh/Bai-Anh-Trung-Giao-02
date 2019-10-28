import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import './PieChart2.css';

class PieChart2 extends Component {
  render() {
    return (
      <div className='PieChart2'>
        <div className='PieChart2-Title'>
          <h4>Top 1</h4>
        </div>
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 }
          ]}
        />
      </div>
    );
  }
}

export default PieChart2;