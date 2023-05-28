import React from "react";
import "./Poster.scss";

import poster from "../../img/magazin-cover.jpg";
import { Link } from 'react-router-dom';
function Poster() {
  return (
    <div className='poster-conteiner'>
      <h3 className='poster__title'>Printmagazine</h3>
      <p className='poster__date'>10/2023</p>
      <div>
        <Link to={"/"}>
        <img className='poster__img' src={poster} alt='img poster' />
        </Link>
      </div>
      <button className='button'>BUtton</button>
    </div>
  );
}

export default Poster;
