import React  from 'react';
import './Picture.scss';

const Picture = (props) => {

  return (
    <div className="myPicture-item">
      <div className="myPicture-item-image" style={{
        background: `url(${props.image}) no-repeat center center`,
        backgroundSize: "contain"
      }}>
      </div>
    </div>
  );
};

export default Picture;
