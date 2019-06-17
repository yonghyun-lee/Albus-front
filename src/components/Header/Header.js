import React  from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import ProfileNavMenu from "../ProfileNavMenu/ProfileNavMenu";
import ProfileContainer from "../../containers/ProfileContainer";

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
      <ProfileContainer user={props.user}/>
      <ProfileNavMenu user={props.user} open={props.open}/>
    </nav>
  );
};

export default Header;
