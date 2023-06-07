import React from "react";
import podcastImg from "../img/podcast.svg"
import PodcastCard from '../components/PodcastCard/PodcastCard';

function Podcast() {
  return (
    <div className='wrapper'>
      <div >
        <img className='header-img' src={podcastImg} alt='podcast' />
      </div>
      <div className="podcast-page-wrapper">
        <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/>

      </div>
    </div>
  );
}

export default Podcast;
