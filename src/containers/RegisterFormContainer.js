import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import {connect} from "react-redux";
import {RegisterActions} from "../store/actionCreators"

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

  onChange = (e) => {
    RegisterActions.changeRegisterForm(e.target.value);
  };

  onRegister = () => {
    const {username} = this.props;

    if (!/^[a-z0-9-_]{3,16}$/.test(username)) {
      RegisterActions.setError({ name: 'FIELD_RULE', payload: 'username' });
      return;
    }
  };

  render() {
    return (
      <RegisterForm
        error={this.props.error}
        email={this.props.socialAuthResult? this.props.socialAuthResult.w3.U3:null}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      username: state.register.username,
    error: state.register.error
    })
  )(RegisterFormContainer));