import React, { Component } from 'react';
import Header from "../components/Header";
import LoginContainer from "../containers/LoginContainer";

class LoginPage extends Component{

  render() {
    return (
      <div>
        <Header/>
        <div className="LandingTemplate">
          <div className="title">
            <h1>Make your Album.</h1>
          </div>
          <LoginContainer/>
        </div>
      </div>
    );
  }
}

export default LoginPage;