import React, { Component } from 'react';
import './RegisterTemplate.scss';
import RegisterTitle from "../RegisterTitle/RegisterTitle";
import RegisterFormContainer from "../../containers/RegisterFormContainer";
import LandingHeader from "../LandingHeader/LandingHeader";

class RegisterTemplate extends Component {
  render() {
    return (
      <div className="registerTemplate">
        <LandingHeader/>
        <RegisterTitle/>
        <RegisterFormContainer/>
      </div>
    );
  }
}

export default RegisterTemplate;
