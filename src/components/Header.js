import React, { Component } from 'react';
import 'styles/Header.scss';
import {Button} from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <h1>Albus</h1>
          <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>Login</Button>
        </nav>
      </header>
    );
  }
}

export default Header;
