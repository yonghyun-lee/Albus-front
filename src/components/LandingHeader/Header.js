import React, { Component } from 'react';
import './Header.scss';
import {Button} from "@material-ui/core";
import {LoginModalActions} from "../../store/actionCreators";

class Header extends Component {
  render() {
    return (
      <nav>
        <h1>Albus</h1>
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

export default Header;
