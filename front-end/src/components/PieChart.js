import React, { Component } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import { VictoryPie } from 'victory';
import './PieChart.css';

class PieChart extends Component {
  render() {
    const { Data, checkResponse, colorArr } = this.props
    return (
      <div className='pieChart'>
        <div className='pieChart-title'>
          <h4>Device Type</h4>
        </div>
        {checkResponse === false ?
          <div className='flex-center'>
            <div className='total-spinner'><h3>Waiting for backend</h3>
              <Spinner className='Spinner' color="info" />
            </div>
          </div>
          :
          <div className='chart-and-item'>
            <div className='Pie'>
              <VictoryPie
                labels={[]} //đễ rỗng để ẩn đi label
                sortKey={['y']}
                innerRadius={120}
                colorScale={colorArr}
                data={Data}
              />
            </div>
            <div className='total-info'>
              <Row>
                {
                  Data.map((item, index) => (
                    <Col sm="4" className='col' key={index}>
                      <div className='info' key={index} >
                        <div className='smartPhone' style={{ background: colorArr[index] }} />
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