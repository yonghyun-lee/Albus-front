import React, {Component} from 'react';
import testImage from '../static/images/test.jpg';
import introImage from '../static/images/intro.jpg';
import ImageSlider from "../components/ImageSlider/ImageSlider";

class ImageSliderContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0
    };
  }

  images = [testImage, introImage, testImage];

  render() {
    return (
      <ImageSlider
        class={this.props.class}
      state={this.state}
      images={this.images}/>
    );
  }
}

export default ImageSliderContainer;
