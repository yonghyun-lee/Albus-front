import React  from 'react';
import './Profile.scss';

const Profile = (props) => {
  console.log(props.user);
  return (
    <div className="profile">
      <img src={props.user.thumbnail} alt="thumbnail"/>
      {/*<img src={props.thumbnail || defaultThumbnail} alt="thumbnail" />*/}
    </div>
  );
};

export default Profile;
