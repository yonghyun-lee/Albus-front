import React, {Component} from 'react';
import MainTemplate from "../components/MainTemplate/MainTemplate";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Cookie from 'js-cookie';
import AuthService from "../lib/AuthService";

class MainContainer extends Component {

  initialize = async () => {
    if (!this.props.isLoggedIn) {
      const accessToken = Cookie.get('access_token');
      if (accessToken) {
        try {
          await AuthService.checkToken();
        } catch (e) {
          if (e.response.data.status === 401) {
            this.props.history.push('/');
          } else {
            console.error(e);
          }
        }
      } else {
        this.props.history.push('/');
      }
    }
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
