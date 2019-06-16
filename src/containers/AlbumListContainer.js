import React, {Component} from 'react';
import AlbumList from "../components/AlbumList/AlbumList";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class AlbumListContainer extends Component {

  render() {
    return (
      <AlbumList
        user={this.props.user}
        open={this.props.open}
        class={this.props.class}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      user: state.login.user,
      open: state.profile.open
    })
  )(AlbumListContainer));
