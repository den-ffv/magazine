import React from "react";
import { Link } from "react-router-dom";
import "./PodcastCard.scss";
import podcastImg from "../../img/podcast-cover.jpg";
import ButtonAll from "../ButtonAll/ButtonAll";

function PodcastCard() {
  return (
    <div className='author podcast'>
      <div className='author__wrapepr'>
        <p className='podcast__number'>04</p>
        <img className='podcast__img' src={podcastImg} alt='author' />
        <h2 className='home-post__title podcast__title'>
          The hidden messages of Jack Nielson
        </h2>
      </div>
      <div className='author__contetn'>
        <div className='text-content__information-post podcast__information-post'>
          <p>
            <span>Date</span>16. March 2022
          </p>
          <p>
            <span>Duration</span>1hr 20min
          </p>
          <ButtonAll to={"full-podcast"} text={"Listen"} />
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;
