import React, { Component } from 'react';
import './Header.scss';
import {Button} from "@material-ui/core";
import {LoginModalActions} from "../../store/actionCreators";
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        {/*<h1 style={{color:'black'}} onClick={BrowserHi}>Albus</h1>*/}
        <NavLink
          className="logo"
          style={{ color: 'white'}}
          activeStyle={{ color: 'black' }}
          to="/main"
        >
          Albus
        </NavLink>
        <Button className="nav-login"
                variant="outlined"
                color="secondary"
                onClick={LoginModalActions.open}>
          Logout
        </Button>
      </nav>
    );
  }
}

export default Header;
