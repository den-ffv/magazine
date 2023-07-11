import React from "react";
import "./Loaders.scss";

function Loaders() {
  return (
    <div className="loaders">
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loaders;
