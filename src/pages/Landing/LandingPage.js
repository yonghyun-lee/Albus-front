import React, { Component } from 'react';
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import './LandingPage.scss'
import LandingBody from "../../components/LandingBody/LandingBody";

class LandingPage extends Component{

  render() {
    return (
      <div className="LandingPage">
        <LandingHeader/>
        <LandingBody/>
      </div>
    );
  }
}

export default LandingPage;