import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryClipContainer, VictoryAxis } from 'victory';
import './LineChart.css'
import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import { Spinner } from 'reactstrap';
import _ from 'lodash'

function LineChart(props) {
  const [change, setChange] = useState('day');
  const colorArr = ['blue', 'green'];
  const { data, checkResponse } = props.dataLineChart
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
      {checkResponse === false ?
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
            {
              _.map(_.find(data, { type: change }).data, (item, index) => (
                <VictoryLine key={index}
                  className='victory-line'
                  groupComponent={<VictoryClipContainer clipPadding={{ top: 2.5, right: 5 }} />}
                  style={{ data: { stroke: colorArr[index], strokeWidth: 4, strokeLinecap: "round" } }}
                  data={item.data}
                />
              ))
            }
          </VictoryChart>
          <div className='all-info-line-chart'>
            {
              _.map(_.find(data, { type: change }).data, (item, index) => (
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