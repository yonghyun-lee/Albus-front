import React  from 'react';
import './MainTemplate.scss';
import ImageSliderContainer from "../../containers/ImageSliderContainer";
import AlbumListContainer from "../../containers/AlbumListContainer";

const MainTemplate = () => {
  return (
    <div className="mainTemplate">
      <ImageSliderContainer class="snapScroll"/>
      <AlbumListContainer class="snapScroll"/>
    </div>
  );
};

export default MainTemplate;
