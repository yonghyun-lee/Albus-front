import React, {Component} from "react";
import LoginModal from "../components/LoginModal";

class LoginContainer extends Component {

  onSocialLogin = () => {

  };

  onSocialFail = () => {

  };

  render() {
    return (
      <div>
        <LoginModal
          onSocialLogin={this.onSocialLogin}
          onSocialFail={this.onSocialFail}
        />
      </div>
    );
  }
}

export default LoginContainer;