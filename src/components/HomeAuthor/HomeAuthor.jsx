import React from "react";
import "./HomeAuthor.scss";
import author from "../../img/author.jpg";
import { Link } from "react-router-dom";
function HomeAuthor() {
  return (
        <Link to={"/full-author"}>
    <div className='home-author-card'>
        <img src={author} alt='author' />
        <div className='home-author-card__contetn'>
          <h2 className='home-post__title home-author-card__title'>
            Jakob Grønberg
          </h2>
          <div class='text-content__information-post home-post-information-post'>
            <div>
              <p>
                <span>Job</span>Artist
              </p>
              <p>
                <span>City</span>Berlin
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomeAuthor;
