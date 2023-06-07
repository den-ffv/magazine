import React from "react";
import { Link } from "react-router-dom";
import "./AuthorCard.scss";
import author from "../../img/author.jpg";
import ButtonAll from "../ButtonAll/ButtonAll";

function AuthorCard() {
  return (
    <div className='author'>
      <div className='author__wrapepr'>
        <img className='author__img' src={author} alt='author' />
        <h2 className='home-post__title home-author-card__title'>
          Jakob Grønberg
        </h2>
      </div>
      <div className='author__contetn'>
        <div class='text-content__information-post author__information-post'>
          <p>
            <span>Job</span>Artist
          </p>
          <p>
            <span>City</span>Berlin
          </p>
          <ButtonAll to={"full-author"} text={"About"} />
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
