import React  from 'react';
import styles from './ImageView.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ImageView = (props) => {

  const {property} = props;

  console.log(property);

  return (
    <div className={cx("imageView")}>
      <div className={cx("image")} style={{background: `url(${property}) no-repeat center center`, backgroundSize: "contain"}}/>
    </div>
  );
};

export default ImageView;
