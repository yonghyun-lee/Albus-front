import React  from 'react';
import './ProfileNavMenu.scss';
import {Link, withRouter} from "react-router-dom";
import AuthService from "../../lib/AuthService";

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
          <li><a href='#' onClick={AuthService.logout}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(ProfileNavMenu);
