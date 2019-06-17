import React  from 'react';
import './MyPictureTemplate.scss';
import Header from "../Header/Header";
import Picture from "../Picture/Picture";

const MyPictureTemplate = (props) => {
  return (
    <div className="myPictureTemplate">
      <Header user={props.user} open={props.open}/>
      <div className="myPicture-header">
        <h1>My Picture</h1>
      </div>
      <div className="myPicture-content">
        <Picture image={props.images[0]}/>
        <Picture image={props.images[1]}/>
      </div>
    </div>
  );
};

export default MyPictureTemplate;
