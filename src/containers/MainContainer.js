import React, {Component} from 'react';
import MainTemplate from "../components/MainTemplate/MainTemplate";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AuthService from "../lib/AuthService";

class MainContainer extends Component {

  initialize = async () => {
    AuthService.authCheck(this.props.isLoggedIn, this.props.history);
  };

  componentWillMount() {
    this.initialize();
  }

  render() {
    return (
      <MainTemplate/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isLoggedIn: state.login.isLoggedIn
    })
  )(MainContainer));
