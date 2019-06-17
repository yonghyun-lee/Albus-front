import React  from 'react';
import styles from './Profile.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Profile = (props) => {

  return (
    <div className={cx("profile")}>
      <img onClick={props.handleMenu} src={props.user.thumbnail} alt="thumbnail"/>
      {/*<img src={props.thumbnail || defaultThumbnail} alt="thumbnail" />*/}
    </div>
  );
};

export default Profile;
