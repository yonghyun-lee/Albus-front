import React  from 'react';
import './MyPictureUpload.scss';
import MyPicturePreview from "../MyPicturePreview/MyPicturePreview";

const MyPictureUpload = (props) => {

  return (
    <div className="myPicture-upload">
      <div className="image-upload">
        <input id="image-upload-input" onChange={props.uploadOnChange} type="file" multiple/>
        <label htmlFor="image-upload-input">Upload</label>
      </div>
      <div className="image-upload-active">
        <MyPicturePreview uploadPicture={props.uploadPicture}/>
        <button>Save</button>
      </div>
    </div>
  );
};

export default MyPictureUpload;
