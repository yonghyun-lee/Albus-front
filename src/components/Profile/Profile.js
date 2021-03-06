import React  from 'react';
import './Profile.scss';

const Profile = (props) => {

  return (
    <div className="profile">
      <img onClick={props.handleMenu} src={props.user.thumbnail} alt="thumbnail"/>
      {/*<img src={props.thumbnail || defaultThumbnail} alt="thumbnail" />*/}
    </div>
  );
};

export default Profile;
