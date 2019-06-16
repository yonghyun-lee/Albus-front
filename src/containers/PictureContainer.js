import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AuthService from "../lib/AuthService";

class PictureContainer extends Component {

  initialize = async () => {
    AuthService.authCheck(this.props.isLoggedIn, this.props.history);
  };

  componentWillMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        Picture Page
      </div>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isLoggedIn: state.login.isLoggedIn
    })
  )(PictureContainer));
