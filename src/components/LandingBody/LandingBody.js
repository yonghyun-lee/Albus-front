import React, { Component } from 'react';
import './LandingBody.scss';
import LoginContainer from "../../containers/LoginContainer";

class LandingBody extends Component {
  render() {
    return (
      <div className="body">
        <div className="title">
          <h1>Make your Album.</h1>
          <LoginContainer/>
        </div>
      </div>
    );
  }
}

export default LandingBody;
