import React  from 'react';
import styles from './MainTemplate.scss';
import ImageSliderContainer from "../../containers/ImageSliderContainer";
import AlbumListContainer from "../../containers/AlbumListContainer";
import { FullPage, Slide } from 'react-full-page';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const MainTemplate = () => {
  return (
    <div className={cx("mainTemplate")}>
      <FullPage>
        <Slide>
          <ImageSliderContainer/>
        </Slide>
        <Slide>
          <AlbumListContainer/>
        </Slide>
      </FullPage>
    </div>
  );
};

export default MainTemplate;
