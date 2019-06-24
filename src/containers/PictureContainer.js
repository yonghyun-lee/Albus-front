import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AuthService from "../lib/AuthService";
import MyPictureTemplate from "../components/MyPictureTemplate/MyPictureTemplate";
import testImage from "../static/images/test.jpg";
import introImage from "../static/images/intro.jpg";
import {PictureActions} from "../store/actionCreators";

class PictureContainer extends Component {

  initialize = async () => {
    AuthService.authCheck(this.props.isLoggedIn, this.props.history);
  };

  componentWillMount() {
    this.initialize();
  }

  uploadOnChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      PictureActions.uploadPicture([reader.result]);
    };

    console.log(url);
  };

  uploadOnSubmit = () => {
    console.log(this.props.uploadPicture)
  };

  images = [testImage, introImage];

  render() {
    return (
      <MyPictureTemplate
        images={this.images}
        user={this.props.user}
        open={this.props.open}
        uploadOnChange={this.uploadOnChange}
        uploadState={this.props.uploadState}
        uploadPicture={this.props.uploadPicture}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isLoggedIn: state.login.isLoggedIn,
      user: state.login.user,
      open: state.profile.open,
      uploadState: state.picture.uploadState,
      uploadPicture: state.picture.uploadPicture
    })
  )(PictureContainer));
