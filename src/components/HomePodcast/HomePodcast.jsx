import React from "react";
import "./HomePodcast.scss";
import podcastImg from "../../img/podcast-cover.jpg";
import { Link } from "react-router-dom";
function HomePodcast() {
  return (
    <Link to={'/full-podcast'}>
      <div className='home-podcast-card'>
        <img src={podcastImg} alt='' />
        <h2 className='home-post__title home-podcast-card__title'>
          The hidden messages of Jack Nielson
        </h2>
        <div class='text-content__information-post home-post-information-post'>
          <div>
            <p>
              <span>Date</span>16.06.2022
            </p>
            <p>
              <span>Duration</span>60 Min
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomePodcast;
