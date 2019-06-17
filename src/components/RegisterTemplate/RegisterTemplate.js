import React, { Component } from 'react';
import styles from './RegisterTemplate.scss';
import RegisterTitle from "../RegisterTitle/RegisterTitle";
import RegisterFormContainer from "../../containers/RegisterFormContainer";
import LandingHeader from "../LandingHeader/LandingHeader";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class RegisterTemplate extends Component {
  render() {
    return (
      <div className={cx("registerTemplate")}>
        <LandingHeader/>
        <RegisterTitle/>
        <RegisterFormContainer/>
      </div>
    );
  }
}

export default RegisterTemplate;
