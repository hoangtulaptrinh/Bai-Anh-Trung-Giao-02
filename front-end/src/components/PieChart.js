import React, { Component } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import { VictoryPie } from 'victory';
import './PieChart.css';
import DropDownPieChart from './dropDown/dropDownPieChart'
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash'

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.wrapperRef = React.createRef()
  }
  addEventClickOnBody = () => {
    document.addEventListener('click', this.clickOutSide)
  }
  clickOutSide = (event) => {
    const { target } = event;
    const { dataPieChart, getDataPieChartChooseByOs } = this.props;
    if (!this.wrapperRef.current.contains(target)) {
      const mapArr = _.map(dataPieChart.nameOsArr, function (item) {
        if (item.isChoose === true)
          return item.x
      })
      var chooseOsArr = _.remove(mapArr, function (n) {
        return n !== undefined;
      });
      getDataPieChartChooseByOs(dataPieChart.currentOsChoose, chooseOsArr);
      // xóa bỏ event add Click để tránh rener lại khi click và không gây ảnh hưởng đến các component khác
      document.removeEventListener('click', this.clickOutSide)
    }
  }
  render() {
    const { Data, checkResponse, colorArr } = this.props
    return (
      <div className='pie-chart'>
        <div className='title-and-dropDown'>
          <h4>Device Type</h4>
          <div className='dropDown-pieChart' ref={this.wrapperRef}>
            <DropDownPieChart addEventClickOnBody={() => this.addEventClickOnBody()} />
          </div>
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
                        <div className='smart-phone' style={{ background: colorArr[index] }} />
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

const mapStatetoProps = (state) => {
  return {
    dataPieChart: state.dataPieChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDataPieChartChooseByOs: (currentOsChoose, chooseOsArr) => { dispatch(actions.getDataPieChartChooseByOs({ currentOsChoose: currentOsChoose, chooseOsArr: chooseOsArr })) },
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(PieChart);