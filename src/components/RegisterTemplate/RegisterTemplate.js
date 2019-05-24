import React, { Component } from 'react';
import './RegisterTemplate.scss';
import RegisterTitle from "../RegisterTitle/RegisterTitle";
import RegisterFormContainer from "../../containers/RegisterFormContainer";
import Header from "../LandingHeader/Header";

class RegisterTemplate extends Component {
  render() {
    return (
      <div className="registerTemplate">
        <Header/>
        <RegisterTitle/>
        <RegisterFormContainer/>
      </div>
    );
  }
}

export default RegisterTemplate;
