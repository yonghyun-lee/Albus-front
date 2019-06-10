import React, {Component} from 'react';
import AlbumList from "../components/AlbumList/AlbumList";
import Cookie from "js-cookie";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class AlbumListContainer extends Component {

  logout = () => {
    Cookie.remove('access_token');
    this.props.history.replace('/');
  };

  render() {
    return (
      <AlbumList
        user={this.props.user}
        open={this.props.open}
        class={this.props.class}
        logout={this.logout}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      user: state.login.user,
      open: state.profile.open
    })
  )(AlbumListContainer));
