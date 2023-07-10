import React from "react";
import {  useNavigate } from "react-router-dom";
import arroy from "../../img/arroy.svg";
import "./GoBack.scss";

function GoBack({ linkTo, goBackImg, goBackImgAlt }) {
  const navigate = useNavigate();
  const handelGoBack = () => {
    navigate(-1)
  }
  return (
    <div className='go-back'>
      <button className='button-all go-back__button' onClick={handelGoBack}>
        <img src={arroy} alt='arroy' />
        go back
      </button>
      <dir>
        <img className='go-back__img' src={goBackImg} alt={`${goBackImgAlt}`} />
      </dir>
    </div>
  );
}

export default GoBack;
