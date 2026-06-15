import React from "react";
import "./Poster.scss";

import poster from "../../img/magazin-cover.webp";
import { Link } from 'react-router-dom';
function Poster() {
  return (
    <div className='poster-conteiner'>
      <h3 className='poster__title'>Printmagazine</h3>
      <p className='poster__date'>10/2023</p>
      <div>
        <Link to={"/"}>
        <img
          className='poster__img'
          src={poster}
          alt='img poster'
          width='369'
          height='462'
          loading='lazy'
          decoding='async'
        />
        </Link>
      </div>
      <button className='button'>BUtton</button>
    </div>
  );
}

export default Poster;
