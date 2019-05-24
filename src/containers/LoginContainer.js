import React, {Component} from "react";
import LoginModalContainer from "./LoginModalContainer";
import AuthService from "../lib/AuthService";
import ErrorException from "../lib/ErrorException";
import {withRouter} from "react-router-dom";

class LoginContainer extends Component {

  onSocialLogin = async (response) => {
    try {
      await AuthService.login(response.accessToken);
    } catch (e) {
      const res = ErrorException.getResponse(e);
      if (res.status === 401) {

      }
    }
  };

  render() {
    return (
        <LoginModalContainer
          onSocialLogin={this.onSocialLogin}
          onSocialFail={ErrorException.googleOAuthFail}
        />
    );
  }
}

export default withRouter(LoginContainer);