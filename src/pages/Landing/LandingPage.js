import React, { Component } from 'react';
import Header from "../../components/LandingHeader/Header";
import './LandingPage.scss'
import LandingBody from "../../components/LandingBody/LandingBody";

class LandingPage extends Component{

  render() {
    return (
      <div className="LandingPage">
        <Header/>
        <LandingBody/>
      </div>
    );
  }
}

export default LandingPage;