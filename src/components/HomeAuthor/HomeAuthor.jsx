import React from "react";
import "./HomeAuthor.scss";
import { Link } from "react-router-dom";
function HomeAuthor({ userName, userIcon, job, city}) {
  return (
        <Link to={"/full-author/:id"}>
    <div className='home-author-card'>
        <img src={`../uploads/usersIcon/${userIcon}`} alt='author' />
        <div className='home-author-card__contetn'>
          <h2 className='home-post__title home-author-card__title'>
            {userName}
          </h2>
          <div className='text-content__information-post home-post-information-post'>
            <div>
              <p>
                <span>Job</span>{job}
              </p>
              <p>
                <span>City</span>{city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomeAuthor;
