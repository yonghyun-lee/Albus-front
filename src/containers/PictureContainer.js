import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AuthService from "../lib/AuthService";
import MyPictureTemplate from "../components/MyPictureTemplate/MyPictureTemplate";

class PictureContainer extends Component {

  initialize = async () => {
    AuthService.authCheck(this.props.isLoggedIn, this.props.history);
  };

  componentWillMount() {
    this.initialize();
  }

  render() {
    return (
      <MyPictureTemplate/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isLoggedIn: state.login.isLoggedIn
    })
  )(PictureContainer));
