import React  from 'react';
import './AlbumList.scss';

const AlbumList = (props) => {

  return (
    <div className={"albumList " + props.class}>
      <div className="albumList-header">
        <h1>Your Albums</h1>
      </div>
      <div className="albumList-content">

      </div>
    </div>
  );
};

export default AlbumList;
