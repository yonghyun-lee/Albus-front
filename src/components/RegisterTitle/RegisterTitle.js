import React, { Component } from 'react';
import styles from './RegisterTitle.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class RegisterTitle extends Component {
  render() {
    return (
      <div className={cx("registerTitle")}>
        <div className={cx("registerOverview")}>
          <h1>Welcome to Albus</h1>
          <p>please register</p>
        </div>
      </div>
    );
  }
}

export default RegisterTitle;
