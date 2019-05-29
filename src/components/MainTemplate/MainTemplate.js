import React  from 'react';
import './MainTemplate.scss';
import ImageSliderContainer from "../../containers/ImageSliderContainer";
import AlbumListContainer from "../../containers/AlbumListContainer";

const MainTemplate = () => {
  return (
    <section className="mainTemplate">
      <ImageSliderContainer class="snapScroll"/>
      <AlbumListContainer class="snapScroll"/>
    </section>
  );
};

export default MainTemplate;
