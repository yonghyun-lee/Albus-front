import React, { Component } from 'react';
import './Header.scss';
import {Button} from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <nav>
        <h1>Albus</h1>
        <Button className="nav-login"
                variant="outlined"
                color="secondary"
                onClick={this.handleClickOpen}>
          Login
        </Button>
      </nav>
    );
  }
}

export default Header;
