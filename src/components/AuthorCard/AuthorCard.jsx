import React from "react";
import { Link, useParams } from "react-router-dom";
import "./AuthorCard.scss";
import ButtonAll from "../ButtonAll/ButtonAll";

function AuthorCard({ userName, userIcon, job, city, idPost}) {
  const {id} = useParams()
  return (
    <div className='author'>
      <div className='author__wrapepr'>
        <img className='author__img' src={`../uploads/usersIcon/${userIcon}`} alt='author' />
        <h2 className='home-post__title home-author-card__title'>
          {userName}
        </h2>
      </div>
      <div className='author__contetn'>
        <div className='text-content__information-post author__information-post'>
          <p>
            <span>Job</span>{job}
          </p>
          <p>
            <span>City</span>{city}
          </p>
          <ButtonAll to={`full-author/${idPost}`} text={"About"} />
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
