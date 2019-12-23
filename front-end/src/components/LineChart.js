import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryClipContainer, VictoryAxis } from 'victory';
import './LineChart.css'
import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import { Spinner } from 'reactstrap';
import _ from 'lodash';
import moment from 'moment';

function LineChart(props) {
  const [change, setChange] = useState('day');
  const colorArr =
    ['#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  let data;
  if (change === 'day') {
    data = _.map(props.dataLineChart.data, (item, index) => ({
      name: item.name,
      data: _.map(props.dataLineChart.data[index].data, b => ({
        x: moment(b.x).format('LL'),
        y: b.y
      }))
    }))
  }
  if (change === 'week') {
    data = _.map(props.dataLineChart.data, (item, index) => ({
      name: item.name,
      // loại bỏ tất cả những ngày có number week * year trùng nhau chỉ để lại ngày thứ 2 của mỗi tuần
      data: _.map(_.uniqBy(item.data, a => moment(a.x).format('GGGG WW')), b => ({
        x: moment(b.x).format('GGGG WW'),
        y: _.reduce(_.filter(props.dataLineChart.data[index].data, c => moment(c.x).format('GGGG WW') === moment(b.x).format('GGGG WW')), (total, item) => total + item.y, 0)
      }))
    }))
  }
  if (change === 'month') {
    data = _.map(props.dataLineChart.data, (item, index) => ({
      name: item.name,
      // loại bỏ tất cả những ngày có tháng trùng nhau chỉ để lại ngày mùng 1 của mỗi tháng
      data: _.map(_.uniqBy(item.data, a => moment(a.x).format('M Y')), b => ({
        // đổi label thành dạng tháng năm thay vì ngày tháng năm để hiển thị theo dạng tháng
        x: moment(b.x).format('MMMM YYYY'),
        // cộng dồn tất cả giá trị của tháng vào 1 ngày (ngày mùng 1)
        y: _.reduce(_.filter(props.dataLineChart.data[index].data, c => moment(c.x).format('M Y') === moment(b.x).format('M Y')), (total, item) => total + item.y, 0)
      }))
    }))
  }

  // if (data[0] !== undefined) {
  //   console.log(props.dataLineChart.data[0].data)
  //   console.log(_.map(props.dataLineChart.data, (item, index) => ({
  //     name: item.name,
  //     // loại bỏ tất cả những ngày có number week * year trùng nhau chỉ để lại ngày thứ 2 của mỗi tuần
  //     data: _.map(_.uniqBy(item.data, a => moment(a.x).format('GGGG WW')), b => ({
  //       x: moment(b.x).format('GGGG WW'),
  //       y: _.reduce(_.filter(props.dataLineChart.data[index].data, c => moment(c.x).format('GGGG WW') === moment(b.x).format('GGGG WW')), (total, item) => total + item.y, 0)
  //     }))
  //   })))
  // }

  return (
    <div className='line-chart'>
      <div className='all-title-line-chart'>
        <p className='device-line-chart'>Decive</p>
        <div className='all-switch-line-chart'>
          <p className='switch-line-chart' onClick={() => setChange('day')}>Day</p>
          <p className='switch-line-chart' onClick={() => setChange('week')}>Week</p>
          <p className='switch-line-chart' onClick={() => setChange('month')}>Month</p>
        </div>
      </div>
      {props.dataLineChart.checkResponse === false ?
        <div className='flex-center-4'>
          <div className='total-spinner-4'><h3>Waiting for backend</h3>
            <Spinner className='spinner-4' color="info" />
          </div>
        </div>
        :
        <div className='total-line-chart'>
          <VictoryChart
            height={230}
            theme={VictoryTheme.material}
          >
            {change === 'day' ?
              <VictoryAxis crossAxis
                theme={VictoryTheme.material}
                // tickValues={['December 1, 2019', 'December 31, 2019', 'January 1, 2020', 'January 31, 2020']}
                //fixlabeloverlap để tự động set label không bị chồng chéo
                fixLabelOverlap={true}
                style={{ tickLabels: { fontSize: 10 } }}
              />
              :
              <VictoryAxis crossAxis
                theme={VictoryTheme.material}
                fixLabelOverlap={true}
                style={{ tickLabels: { fontSize: 10 } }}
              />
            }
            <VictoryAxis dependentAxis crossAxis
              theme={VictoryTheme.material}
            />

            {
              _.map(data, (item, index) => (
                <VictoryLine key={index}
                  className='victory-line'
                  groupComponent={<VictoryClipContainer clipPadding={{ top: 2.5, right: 5 }} />}
                  style={{ data: { stroke: colorArr[index], strokeWidth: 1, strokeLinecap: "round" } }}
                  data={item.data}
                />
              ))
            }
          </VictoryChart>
          <div className='all-info-line-chart'>
            {change === 'day' ?
              _.map(data, (item, index) => (
                <div className='type-line-chart' key={index}>
                  <div className='circle-div-line-chart' style={{ background: colorArr[index] }} />
                  <div className='name-total'>
                    <p className='name-type-line-chart'>{item.name}</p>
                    <p className='total-type-line-chart'>
                      {
                        _.reduce(item.data, (total, item) => total + item.y, 0)
                      }
                    </p>
                  </div>
                </div>
              ))
              :
              change === 'week' ?
                _.map(data, (item1, index) => (
                  <div className='type-line-chart' key={index}>
                    <div className='name-total'>
                      <p className='total-type-line-chart'>
                        {
                          _.map(item1.data, (item2, index) => (
                            <div key={index}>
                              <p>{item2.x}</p>
                              <div className='month-total'>
                                <div className='circle-div-line-chart' style={{ background: colorArr[index] }} />
                                <div className='month-data'>
                                  <p className='name-type-line-chart'>{item1.name}</p>
                                  <p>{item2.y}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </p>
                    </div>
                  </div>
                ))
                :
                change === 'month' ?
                  _.map(data, (item1, index) => (
                    <div className='type-line-chart' key={index}>
                      <div className='name-total'>
                        <p className='total-type-line-chart'>
                          {
                            _.map(item1.data, (item2, index) => (
                              <div key={index}>
                                <p>{item2.x}</p>
                                <div className='month-total'>
                                  <div className='circle-div-line-chart' style={{ background: colorArr[index] }} />
                                  <div className='month-data'>
                                    <p className='name-type-line-chart'>{item1.name}</p>
                                    <p>{item2.y}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </p>
                      </div>
                    </div>
                  ))
                  :
                  null
            }
          </div>
        </div>
      }
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    dataLineChart: state.dataLineChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(LineChart);