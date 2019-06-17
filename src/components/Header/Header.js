import React  from 'react';
import styles from './Header.scss';
import {NavLink} from "react-router-dom";
import ProfileNavMenu from "../ProfileNavMenu/ProfileNavMenu";
import ProfileContainer from "../../containers/ProfileContainer";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = (props) => {

  return (
    <nav>
      <NavLink
        className={cx("logo")}
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
