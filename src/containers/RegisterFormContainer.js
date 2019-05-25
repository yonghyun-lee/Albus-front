import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import {connect} from "react-redux";

class RegisterFormContainer extends Component {

  initialize = () => {
    const {isSocial, history} = this.props;

    if (!isSocial) {
      history.push('/');
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <RegisterForm
        email={this.props.socialAuthResult? this.props.socialAuthResult.w3.U3:null}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isSocial: state.login.isSocial,
      socialAuthResult: state.login.socialAuthResult
    })
  )(RegisterFormContainer));