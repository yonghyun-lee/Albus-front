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
    PictureActions.makeFormPicture(e.target.files);

    for (let file of e.target.files) {
      const reader = new FileReader();

      reader.onloadend = () => {
        PictureActions.uploadPicture(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  uploadOnSubmit = async () => {
    const formData = new FormData();

    for (let picture of this.props.formPicture) {
      formData.append("picture", picture);
    }

    try {
      const res = await AuthService.uploadPictures(formData);

      if (res.status===200) {
        alert("success");
      }
    } catch (e) {
      console.log(e.response.data.status);
      // console.error(e.response.data);
    }
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
        uploadPicture={this.props.uploadPicture}
        uploadOnSubmit={this.uploadOnSubmit}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      isLoggedIn: state.login.isLoggedIn,
      user: state.login.user,
      open: state.profile.open,
      uploadState: state.picture.uploadState,
      uploadPicture: state.picture.uploadPicture,
      formPicture: state.picture.formPicture
    })
  )(PictureContainer));
