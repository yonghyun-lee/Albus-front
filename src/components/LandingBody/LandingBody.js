import React, { Component } from 'react';
import styles from './LandingBody.scss';
import LoginContainer from "../../containers/LoginContainer";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class LandingBody extends Component {
  render() {
    return (
      <div className={cx("body")}>
        <div className={cx("title")}>
          <h1>Make your Album.</h1>
          <LoginContainer/>
        </div>
      </div>
    );
  }
}

export default LandingBody;
