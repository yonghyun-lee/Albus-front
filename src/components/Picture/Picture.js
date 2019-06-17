import React  from 'react';
import styles from './Picture.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Picture = (props) => {

  return (
    <div className={cx("myPicture-item")}>
      <div className={cx("myPicture-item-image")} style={{
        background: `url(${props.image}) no-repeat center center`,
        backgroundSize: "contain"
      }}>

      </div>
    </div>
  );
};

export default Picture;
