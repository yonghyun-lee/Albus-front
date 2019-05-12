import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {LoginModalActions} from "../store/actionCreators";
import LoginModal from "../components/LoginModal/LoginModal";

class LoginModalContainer extends Component {

  handleOpen = () => {
    LoginModalActions.open();
  };

  handleClose = () => {
    LoginModalActions.close();
  };

  render() {
    const {onSocialLogin, onSocialFail} = this.props;
    return (
      <div>
        <LoginModal
          onSocialLogin={onSocialLogin}
          onSocialFail={onSocialFail}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          modalState={this.props.open}
        />
      </div>
    );
  }
}

export default withRouter(
  connect((state) => ({
      open: state.loginModal.open
    })
  )(LoginModalContainer));