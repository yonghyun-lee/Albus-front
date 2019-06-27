import React  from 'react';
import './MyPicturePreview.scss';

const MyPicturePreview = (props) => {
  return (
    <div className="image-upload-preview">
      {props.uploadPicture.map((element, index)=> (
        <img key={index} src={element} alt=""/>
      ))}
    </div>
  );
};

export default MyPicturePreview;
