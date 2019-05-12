import React, {Component} from "react";
import LoginModalContainer from "./LoginModalContainer";

class LoginContainer extends Component {

  onSocialLogin = () => {

  };

  onSocialFail = () => {

  };

  render() {
    return (
        <LoginModalContainer
          onSocialLogin={this.onSocialLogin}
          onSocialFail={this.onSocialFail}
        />
    );
  }
}

export default LoginContainer;