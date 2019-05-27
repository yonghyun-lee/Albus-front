import React  from 'react';
import './MainTemplate.scss';
import ImageSlider from "../ImageSlider/ImageSlider";

const MainTemplate = () => {
  return (
    <div className="mainTemplate">
      <section className="imageSection">
        <ImageSlider/>
      </section>
    </div>
  );
};

export default MainTemplate;
