import React, { Component } from 'react';
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import styles from './LandingPage.scss'
import LandingBody from "../../components/LandingBody/LandingBody";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class LandingPage extends Component{

  render() {
    return (
      <div className={cx("LandingPage")}>
        <LandingHeader/>
        <LandingBody/>
      </div>
    );
  }
}

export default LandingPage;