import React  from 'react';
import './MyPictureTemplate.scss';
import Header from "../Header/Header";
import Picture from "../Picture/Picture";
import MyPictureUpload from "../MyPictureUpload/MyPictureUpload";

const MyPictureTemplate = (props) => {
  return (
    <div className="myPictureTemplate">
      <Header user={props.user} open={props.open}/>
      <div className="myPicture-header">
        <h1>My Picture</h1>
      </div>
      <MyPictureUpload
        uploadState={props.uploadState}
        uploadOnChange={props.uploadOnChange}
        uploadPicture={props.uploadPicture}
        uploadOnSubmit={props.uploadOnSubmit}/>
      <div className="myPicture-content">
        <Picture image={props.images[0]}/>
        <Picture image={props.images[1]}/>
      </div>
    </div>
  );
};

export default MyPictureTemplate;
