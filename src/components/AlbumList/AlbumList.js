import React  from 'react';
import './AlbumList.scss';
import Header from "../Header/Header";
import Album from "../Album/Album";
import Plus from "../Album/Plus";

const AlbumList = (props) => {

  return (
    <div className={"albumList " + props.class}>
      <Header/>
      <div className="albumList-header">
        <h1>Your Albums</h1>
      </div>
      <div className="albumList-content">
        <Album/>
        <Album/>
        <Album/>
        <Plus/>
      </div>
    </div>
  );
};

export default AlbumList;
