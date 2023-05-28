import React from 'react'
import "./pages.scss"
import artAndLife from "../img/art_life.svg"
import RunningText from '../components/RunningText/RunningText';
import BigPost from '../components/BigPost/BigPost';
import HomePost from '../components/HomePost/HomePost';
import Poster from '../components/Poster/Poster';
import { Link } from 'react-router-dom';
import Popular from '../components/Popular/Popular';
import Form from '../components/Form/Form';

function Home() {
  return (
    <div className='wrapper'>
      <img className='header-img'  src={artAndLife} alt="Art And Life" />
      <RunningText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit +++"} repeatCount={5}  />
      <BigPost/>
      <div className='flex-wrapper'>

      <div>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <Link to={"/magazine"}>
        All articles
      </Link>
      </div>
      <div>

      <Poster/>
      <h3 className='home-popular-tititle'>Most Popular</h3>
      <Popular/>
      <Popular/>
      <Popular/>
      <Form/>
      </div>
      </div>
    </div>
  )
}

export default Home