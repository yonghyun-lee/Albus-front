import React  from 'react';
import './ProfileNavMenu.scss';

const ProfileNavMenu = (props) => {
  return (
    <nav className="profile-nav-menu">
      <ul>
        <li>Logout</li>
        <li>My Pictures</li>
      </ul>
    </nav>
  );
};

export default ProfileNavMenu;
