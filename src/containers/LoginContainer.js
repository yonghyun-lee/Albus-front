import React, {Component} from "react";
import LoginModalContainer from "./LoginModalContainer";
import AuthService from "../lib/AuthService";
import ErrorException from "../lib/ErrorException";
import {withRouter} from "react-router-dom";
import {LoginActions} from "../store/actionCreators";

class LoginContainer extends Component {

  initialize = async () => {
    AuthService.landingAuthCheck(this.props.isLoggedIn, this.props.history);
  };

  componentWillMount() {
    this.initialize();
  }

  onSocialLogin = async (response) => {
    await LoginActions.socialSuccess(response);

    try {
      const res = await AuthService.login(response.accessToken);

      if (res.status === 200) {
        console.log(res);
        await LoginActions.loginSuccess(res.data.user);
        this.props.history.push('/main');
      }
    } catch (e) {
      console.log(e);
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