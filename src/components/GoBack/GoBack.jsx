import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arroy from "../../img/arroy.svg";
import "./GoBack.scss"

function GoBack({ linkTo, goBackImg, goBackImgAlt }) {
  const navigate = useNavigate()
  return (
    <div className='go-back'>
      <Link className='button-all go-back__button' to={navigate(-1)}>
        <img src={arroy} alt='arroy' />
        go back
      </Link>
      <dir>
        <img className='go-back__img' src={goBackImg} alt={`${goBackImgAlt}`} />
      </dir>
    </div>
  );
}

export default GoBack;
