import React, { Component } from 'react';
import './RegisterTemplate.scss';
import RegisterTitle from "../RegisterTitle/RegisterTitle";
import RegisterFormContainer from "../../containers/RegisterFormContainer";

class RegisterTemplate extends Component {
  render() {
    return (
      <div className="registerTemplate">
        <RegisterTitle/>
        <RegisterFormContainer/>
      </div>
    );
  }
}

export default RegisterTemplate;
