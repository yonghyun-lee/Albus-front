import React  from 'react';
import './MyPictureUpload.scss';

const MyPictureUpload = (props) => {
  return (
    <div className="myPicture-upload">
      <div className="image-upload">
        <input id="image-upload-input" onChange={props.uploadOnChange} type="file" multiple/>
        <label htmlFor="image-upload-input">Upload</label>
      </div>
      <div className="image-upload-active">
        <div className="image-upload-preview"/>
        <button value="Save"/>
      </div>
    </div>
  );
};

export default MyPictureUpload;
