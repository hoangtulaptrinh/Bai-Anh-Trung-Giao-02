import React, { useState } from "react";
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import './DateRangePicker.css'

function DatePicker(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    if (startDate !== null && endDate !== null) {
      props.setDateRangePicker(String(startDate._d), String(endDate._d))
    }
  };
  const endPick = () => {
    props.showLoading();
    props.getApi(props.dataDateRangePicker);
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
        onClose={endPick}
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
