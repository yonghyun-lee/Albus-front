import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";

class RegisterFormContainer extends Component {

  render() {
    return (
      <RegisterForm/>
    );
  }
}

export default withRouter(RegisterFormContainer);