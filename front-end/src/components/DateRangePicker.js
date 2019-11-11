import React, { useState } from "react";
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import './DateRangePicker.css'
import { Button } from 'reactstrap'

function DatePicker(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [CatchStartAccept, setCatchStartAccept] = useState('');
  const [CatchEndAccept, setCatchEndAccept] = useState('');
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    if (startDate !== null && endDate !== null) {
      props.setDateRangePicker(startDate.format('L'), endDate.format('L'))
    }
  };
  const renderButton = () => <div className='group-btn'>
    <Button outline color="success" onClick={Accept}>Accept</Button>
    <Button outline color="danger" onClick={Cancel}>Cancel</Button>
  </div>
  const Accept = () => {
    if (startDate === null || endDate === null) {
      return alert("You can't leave it blank")
    }
    if (startDate.format('L') === CatchStartAccept && endDate.format('L') === CatchEndAccept) {
      return alert("You can't let them duplicate")
    }
    setCatchStartAccept(startDate.format('L'))
    setCatchEndAccept(endDate.format('L'))
    props.showLoading();
    props.getApi(props.dataDateRangePicker);
    setFocusedInput(null) // để null thì đóng calendar
  }
  const Cancel = () => {
    setFocusedInput(null) // để null thì đóng calendar
  }
  return (
    <div className="DateRangePicker">
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        renderCalendarInfo={renderButton}
        keepOpenOnDateSelect={true} //giữ cho calendar không đóng khi click đủ 2 input
      // withFullScreenPortal={true} //bâm vào thì full màn hình
      />
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    dataDateRangePicker: state.dataDateRangePicker
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApi: (data) => { dispatch(actions.getApi(data)) },
    setDateRangePicker: (startDate, endDate) => { dispatch(actions.setDateRangePicker({ startDate: startDate, endDate: endDate })) },
    showLoading: () => { dispatch(actions.showLoading()) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DatePicker);
