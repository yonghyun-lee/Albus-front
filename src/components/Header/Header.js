import React  from 'react';
import './Header.scss';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

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
      <Button className="nav-login"
              variant="outlined"
              color="secondary"
              onClick={props.logout}>
        Logout
      </Button>
    </nav>
  );
};

export default Header;
