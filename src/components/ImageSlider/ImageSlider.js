import React  from 'react';
import styles from './ImageSlider.scss';
import ImageView from "../ImageView/ImageView";
import styled, {keyframes} from 'styled-components'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ImageSlider = (props) => {

  const {images} = props;

  const width = 100*images.length;

  const keyframe = keyframes`
    0% {
      left: 0%;
    }
    25% {
      left: -100%;
    }
    50% {
      left: -100%;
    }
    75% {
      left: -200%;
    }
    100% {
      left: -200%;
    }
  `;

  const ImageWrapper = styled.div`
    width: ${width}%
    animation: ${keyframe} 5s infinite;
  `;

  return (
    <div className={cx("imageSlider ", props.class)}>
      <ImageWrapper className={cx("imageSlider-wrapper")}>
        {images.map((property, index)=> <ImageView key={index} property={property}/>)}
      </ImageWrapper>
    </div>
  );
};

export default ImageSlider;
