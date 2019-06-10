import React  from 'react';
import './MainTemplate.scss';
import ImageSliderContainer from "../../containers/ImageSliderContainer";
import AlbumListContainer from "../../containers/AlbumListContainer";
import { FullPage, Slide } from 'react-full-page';

const MainTemplate = () => {
  return (
    <div className="mainTemplate">
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
