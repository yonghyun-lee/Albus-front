import React, {Component} from 'react';
import AlbumList from "../components/AlbumList/AlbumList";

class AlbumListContainer extends Component {

  render() {
    return (
      <AlbumList class={this.props.class}/>
    );
  }
}

export default AlbumListContainer;
