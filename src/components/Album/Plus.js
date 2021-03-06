import React  from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faPlus} from "@fortawesome/free-solid-svg-icons/index";

const Plus = (props) => {

  return (
    <div className="album-item">
      <div className="album-item-content">
        <FontAwesomeIcon className="plus-icon" icon={faPlus}/>
        <p className="plus-text">new Album</p>
      </div>
    </div>
  );
};

export default Plus;
