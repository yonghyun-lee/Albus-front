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
      <MyPictureTemplate user={this.props.user} open={this.props.open}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isLoggedIn: state.login.isLoggedIn,
      user: state.login.user,
      open: state.profile.open
    })
  )(PictureContainer));
