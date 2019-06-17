import React  from 'react';
import styles from './ProfileNavMenu.scss';
import {Link, withRouter} from "react-router-dom";
import AuthService from "../../lib/AuthService";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ProfileNavMenu = (props) => {

  const {email, username} = props.user;

  console.log(props.open);

  return (
    <nav id="profile-nav-menu" className={cx({"active": props.open}, {"inactive": !props.open})}>
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
