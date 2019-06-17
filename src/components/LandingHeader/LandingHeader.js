import React, { Component } from 'react';
import styles from './LandingHeader.scss';
import {Button} from "@material-ui/core";
import {LoginModalActions} from "../../store/actionCreators";
import {NavLink} from "react-router-dom";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class LandingHeader extends Component {
  render() {
    return (
      <nav>
        {/*<h1 style={{color:'black'}} onClick={BrowserHi}>Albus</h1>*/}
        <NavLink
          className={cx("logo")}
          style={{ color: 'white'}}
          to="/"
        >
          Albus
        </NavLink>
        <Button className={cx("nav-login")}
                variant="outlined"
                color="secondary"
                onClick={LoginModalActions.open}>
          Login
        </Button>
      </nav>
    );
  }
}

export default LandingHeader;
