import React, {Component} from 'react';
import AlbumList from "../components/AlbumList/AlbumList";
import Cookie from "js-cookie";
import {withRouter} from "react-router-dom";

class AlbumListContainer extends Component {

  logout = () => {
    Cookie.remove('access_token');
    this.props.history.replace('/');
  };

  render() {
    return (
      <AlbumList
        class={this.props.class}
        logout={this.logout}/>
    );
  }
}

export default withRouter(AlbumListContainer);
