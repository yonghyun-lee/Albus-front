import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AuthService from "../lib/AuthService";
import MyPictureTemplate from "../components/MyPictureTemplate/MyPictureTemplate";
import testImage from "../static/images/test.jpg";
import introImage from "../static/images/intro.jpg";

class PictureContainer extends Component {

  initialize = async () => {
    AuthService.authCheck(this.props.isLoggedIn, this.props.history);
  };

  componentWillMount() {
    this.initialize();
  }

  uploadOnChange = (e) => {
    console.log(e.target.files);
  };

  images = [testImage, introImage];

  render() {
    return (
      <MyPictureTemplate
        images={this.images}
        user={this.props.user}
        open={this.props.open}
        uploadOnChange={this.uploadOnChange}/>
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
