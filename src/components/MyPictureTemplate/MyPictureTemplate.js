import React  from 'react';
import styles from './MyPictureTemplate.scss';
import Header from "../Header/Header";
import Picture from "../Picture/Picture";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const MyPictureTemplate = (props) => {
  return (
    <div className={cx("myPictureTemplate")}>
      <Header user={props.user} open={props.open}/>
      <div className={cx("myPicture-header")}>
        <h1>My Picture</h1>
      </div>
      <div className={cx("myPicture-content")}>
        <Picture image={props.images[0]}/>
        <Picture image={props.images[1]}/>
      </div>
    </div>
  );
};

export default MyPictureTemplate;
