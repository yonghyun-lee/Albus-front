import React, { Component } from 'react';
import '../styles/App.scss';
import Fab from '@material-ui/core/Fab';
import {Button} from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <h1>Albus</h1>
            <Button variant="outlined" color="secondary">Login</Button>
          </nav>
          <div className="title">
            <h1>Make your Album.</h1>
            <Fab color={"secondary"} variant="extended" className="loginBtn">
              Start
            </Fab>
            {/*<button className="loginBtn">*/}
            {/*  Login*/}
            {/*</button>*/}
          </div>
        </div>
      </header>
    );
  }
}

export default App;
