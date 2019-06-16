import React  from 'react';
import './ProfileNavMenu.scss';
import {Link} from "react-router-dom";

const ProfileNavMenu = (props) => {

  const {email, username} = props.user;

  console.log(props.open);

  return (
    <nav id="profile-nav-menu" className={props.open? "active":"inactive"}>
      <div className="profile-menu-info">
        <p className="name">{username}</p>
        <p className="email">{email}</p>
      </div>
      <div>
        <ul>
          <li><Link to="/picture">My Pictures</Link></li>
          <li><a href='#' onClick={props.logout}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfileNavMenu;
