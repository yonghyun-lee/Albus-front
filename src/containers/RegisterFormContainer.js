import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {RegisterForm} from "../components/RegisterForm/RegisterForm";
import {connect} from "react-redux";
import {RegisterActions} from "../store/actionCreators"
import * as axios from "axios";
import ErrorException from "../lib/ErrorException";
import AuthService from "../lib/AuthService";

class RegisterFormContainer extends Component {

  initialize = () => {
    const {isSocial, history} = this.props;

    if (!isSocial) {
      history.push('/');
      return;
    }

    RegisterActions.setEmail(this.props.socialAuthResult.w3.U3);
  };

  componentDidMount() {
    this.initialize();
  }

  onChange = (e) => {
    RegisterActions.changeRegisterForm(e.target.value);
    if (!/^[가-힣]+$/.test(e.target.value)) {
      RegisterActions.setError({ name: 'FIELD_RULE', payload: 'username' });
    } else {
      RegisterActions.setError(null);
    }
  };

  onRegister = async (e) => {
    e.preventDefault();

    const {username, email, history} = this.props;

    if (!/^[가-힣]+$/.test(username)) {
      RegisterActions.setError({ name: 'FIELD_RULE', payload: 'username' });
      return;
    } else {
      RegisterActions.setError(null);
    }

    const option = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      data: {
        username,
        fallbackEmail: email,
        accessToken: this.props.socialAuthResult.accessToken
      },
      url: AuthService.serverHost + '/auth/register/social'
    };

    try {
      const res = await axios(option);

      if (res.status === 200) {
        history.push('/')
      }
    } catch (e) {
      console.log(ErrorException.getResponse(e));
    }
  };

  render() {
    return (
      <RegisterForm
        error={this.props.error}
        email={this.props.socialAuthResult? this.props.socialAuthResult.w3.U3:null}
        isSocial={this.props.isSocial}
        onChange={this.onChange}
        onRegister={this.onRegister}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      username: state.register.username,
      email: state.register.email,
      error: state.register.error,
      socialAuthResult: state.login.socialAuthResult,
      isSocial: state.login.isSocial
    })
  )(RegisterFormContainer));