import React  from 'react';
import styles from './Album.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Album = (props) => {

  return (
    <div className={cx("album-item")}>
      <div className={cx("album-item-content")}>
        <h2>Monday</h2>
        <p>2019.06.01</p>
      </div>
    </div>
  );
};

export default Album;
