import React  from 'react';
import './Profile.scss';
import ProfileNavMenu from "../ProfileNavMenu/ProfileNavMenu";

const Profile = (props) => {
  console.log(props.user);
  return (
    <div className="profile">
      <img src={props.user.thumbnail} alt="thumbnail"/>
      {/*<img src={props.thumbnail || defaultThumbnail} alt="thumbnail" />*/}
      <ProfileNavMenu/>
    </div>
  );
};

export default Profile;
