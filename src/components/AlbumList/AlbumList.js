import React  from 'react';
import './AlbumList.scss';
import Album from "../Album/Album";
import Plus from "../Album/Plus";
import Header from "../Header/Header";

const AlbumList = (props) => {

  return (
    <div className={"albumList " + props.class}>
      <Header user={props.user} open={props.open}/>
      <div className="albumList-header">
        <h1>My Albums</h1>
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
