import React, {Component} from "react";
import LoginModalContainer from "./LoginModalContainer";
import AuthService from "../lib/AuthService";
import ErrorException from "../lib/ErrorException";
import {withRouter} from "react-router-dom";
import {LoginActions} from "../store/actionCreators";

class LoginContainer extends Component {

  onSocialLogin = async (response) => {
    await LoginActions.socialSuccess(response);

    try {
      const res = await AuthService.login(response.accessToken);

      console.log(res.data);
    } catch (e) {
      const res = ErrorException.getResponse(e);
      if (res.status === 401) {
        this.props.history.push('/register');
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