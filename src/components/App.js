import React, { Component } from 'react';
import '../styles/App.scss';
import intro from '../static/images/intro.jpg';
import Fab from '@material-ui/core/Fab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={intro} alt="intro"/>
        <div className="title">
          <h1>Make your Album</h1>
          <Fab color={"primary"} variant="extended" className="loginBtn">
            Login
          </Fab>
          {/*<button className="loginBtn">*/}
          {/*  Login*/}
          {/*</button>*/}
        </div>
      </div>
    );
  }
}

export default App;
