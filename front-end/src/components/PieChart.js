import React, { Component, useState } from 'react';
import { Row, Col, Spinner, Progress } from 'reactstrap';
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
      this.setState({ count: this.state.count + 1 });
    }, 100)
  }
  render() {
    const { Data, colorArr } = this.props
    this.incrementCount();
    return (
      <div className='PieChart'>
        <div className='PieChart-Title'>
          <h4>Device Type</h4>
        </div>
        {Data[0] === undefined ?
          <div className='flex-center'>
            <div className='Total-Spinner'>
              <Progress className='Progress-h3' animated color="info" value={this.state.count} ><h3>Waiting for backend</h3></Progress>
              <Spinner className='Spinner' color="info" />
            </div>
          </div>
          :
          <div className='chartAndItem'>
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
        }

      </div>
    );
  }
}

export default PieChart;