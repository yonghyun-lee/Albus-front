import React  from 'react';
import './Profile.scss';

const Profile = (props) => {

  const profileNav = () => {
    document.getElementById('profile-nav-menu')
  };

  return (
    <div className="profile">
      <img onClick={profileNav} src={props.user.thumbnail} alt="thumbnail"/>
      {/*<img src={props.thumbnail || defaultThumbnail} alt="thumbnail" />*/}
    </div>
  );
};

export default Profile;
