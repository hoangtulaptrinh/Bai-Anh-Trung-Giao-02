import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { VictoryPie } from 'victory';
import './PieChart.css';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1.1 });
    }, 100)
  }
  render() {
    const { Data, colorArr } = this.props
    return (
      <div className='PieChart'>
        <div className='PieChart-Title'>
          <h4>Device Type</h4>
        </div>
        <div className='Pie'>
          <VictoryPie
            labels={[]} //đễ rỗng để ẩn đi label
            sortKey={['y']}
            innerRadius={120}
            colorScale={colorArr}
            data={Data}
          />
        </div>
        <div className='Total-Info'>
          <Row>
            {
              Data.map((item, index) => (
                <Col sm="4" className='Col'>
                  <div className='Info' key={index} >
                    <div className='SmartPhone' style={{ background: colorArr[index] }} />
                    {/* check nếu tồn tại (tức là đã get Api đó) */}
                    {item.x !== undefined ?
                      <div className='info-item'>
                        <h5>{item.x}</h5>
                        <h5>{item.y} %</h5>
                      </div>
                      : null
                    }
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </div>
    );
  }
}

export default PieChart;