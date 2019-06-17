import React, { Component } from 'react';
import './LandingHeader.scss';
import {Button} from "@material-ui/core";
import {LoginModalActions} from "../../store/actionCreators";
import {NavLink} from "react-router-dom";

class LandingHeader extends Component {
  render() {
    return (
      <nav>
        {/*<h1 style={{color:'black'}} onClick={BrowserHi}>Albus</h1>*/}
        <NavLink
          className="logo"
          style={{ color: 'white'}}
          to="/"
        >
          Albus
        </NavLink>
        <Button className="nav-login"
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
