import React  from 'react';
import styles from './AlbumList.scss';
import Album from "../Album/Album";
import Plus from "../Album/Plus";
import Header from "../Header/Header";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const AlbumList = (props) => {

  return (
    <div className={cx("albumList ", props.class)}>
      <Header user={props.user} open={props.open}/>
      <div className={cx("albumList-header")}>
        <h1>My Albums</h1>
      </div>
      <div className={cx("albumList-content")}>
        <Album/>
        <Album/>
        <Album/>
        <Plus/>
      </div>
    </div>
  );
};

export default AlbumList;
