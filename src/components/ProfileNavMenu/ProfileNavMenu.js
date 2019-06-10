import React  from 'react';
import './ProfileNavMenu.scss';

const ProfileNavMenu = (props) => {

  const {email, username} = props.user;

  return (
    <nav id="profile-nav-menu">
      <div className="profile-menu-info">
        <p className="name">{username}</p>
        <p className="email">{email}</p>
      </div>
      <div>
        <ul>
          <li><a href='#'>My Pictures</a></li>
          <li><a href='#' onClick={props.logout}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfileNavMenu;
