import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
import classNames from 'classnames';
import * as actions from '../../actions/index';
import './dropDownPieChart.css'

const DropDownPieChart = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const arrOs = props.dataPieChart.nameOsArr;
  const [reRender, setReRender] = useState(false);
  const chooseThisOs = (item) => {
    props.setOsChoose(item)
    setReRender(prevState => !prevState);
  }
  //khi dropDown mở ra thì chạy func addEventClickOnBody để add Event Click vào Body
  if (dropdownOpen === true) {
    props.addEventClickOnBody();
  }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Click on OS you like!
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem disabled>Let Choose Your Os!</DropdownItem>
        {
          arrOs.map((item, index) => (
            <div className='arrOs-item' key={index}>
              <DropdownItem divider />
              <div className='dropDown-item' onClick={() => chooseThisOs(item.x)}>
                {item.x}
                <FaCheck className={classNames('icon-check', {
                  check: arrOs[index].isChoose === true
                })} />
              </div>
            </div>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  );
}

const mapStatetoProps = (state) => {
  return {
    dataPieChart: state.dataPieChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setOsChoose: (data) => { dispatch(actions.setOsChoose(data)) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DropDownPieChart);