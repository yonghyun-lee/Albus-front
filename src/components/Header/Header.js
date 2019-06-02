import React  from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";

const Header = (props) => {
  console.log(props);
  return (
    <nav>
      <NavLink
        className="logo"
        style={{ color: 'black'}}
        to="/main"
      >
        Albus
      </NavLink>
      {/*<Button className="nav-login"*/}
      {/*        variant="outlined"*/}
      {/*        color="secondary"*/}
      {/*        onClick={props.logout}>*/}
      {/*  Logout*/}
      {/*</Button>*/}
      <Profile user={props.user}/>
    </nav>
  );
};

export default Header;
