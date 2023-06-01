import React from "react";
import { Link } from "react-router-dom";
import arroy from "../../img/arroy.svg" 
import "./ButtonAll.scss"

function ButtonAll({to , text}) {
  return (
    <>
      <Link className='button-all' to={`/${to}`}>
        {text} 
        <img src={arroy} alt="arroy" />
      </Link>
    </>
  );
}

export default ButtonAll;
