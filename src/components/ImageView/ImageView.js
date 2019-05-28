import React  from 'react';
import './ImageView.scss';

const ImageView = (props) => {

  const {property} = props;

  console.log(property);

  return (
    <div className="imageView">
      <div className="image" style={{background: `url(${property}) no-repeat center center`, backgroundSize: "contain"}}/>
    </div>
  );
};

export default ImageView;
