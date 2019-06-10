import React  from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";
import ProfileNavMenu from "../ProfileNavMenu/ProfileNavMenu";

const Header = (props) => {
  return (
    <nav>
      <NavLink
        className="logo"
        style={{ color: 'black'}}
        to="/main"
      >
        Albus
      </NavLink>
      <Profile user={props.user}/>
      <ProfileNavMenu user={props.user} logout={props.logout}/>
    </nav>
  );
};

export default Header;
