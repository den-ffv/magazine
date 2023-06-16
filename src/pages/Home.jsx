import React from "react";
import "./pages.scss";
import artAndLife from "../img/art_life.svg";
import RunningText from "../components/RunningText/RunningText";
import BigPost from "../components/BigPost/BigPost";
import HomePost from "../components/HomePost/HomePost";
import Poster from "../components/Poster/Poster";
import { Link } from "react-router-dom";
import Popular from "../components/Popular/Popular";
import Form from "../components/Form/Form";
import ButtonAll from "../components/ButtonAll/ButtonAll";
import HomePodcast from "../components/HomePodcast/HomePodcast";
import HomeAuthor from "../components/HomeAuthor/HomeAuthor";

function Home({ data, authors }) {

  return (
    <>
      <div className='wrapper'>
        <img className='header-img' src={artAndLife} alt='Art And Life' />
      </div>
      <RunningText
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit +++"}
        repeatCount={4}
      />
      <div className='wrapper'>
        {data.slice(1, 2).map((post) => (
          <BigPost
            key={post.id}
            idPost={post.id}
            img={post.image}
            title={post.title}
            introduction={post.introduction}
            text={post.text}
            tag={post.tag}
            postAuthor={post.author.fullName}
            dayOfCreation={post.createdAt}
          />
        ))}
        <div className='flex-wrapper'>
          <div className='home-post-wrapper'>
            {data.slice(0, 7).map((post) => (
              <HomePost
                key={post.id}
                idPost={post.id}
                img={post.image}
                title={post.title}
                introduction={post.introduction}
                text={post.text}
                tag={post.tag}
                postAuthor={post.author.fullName}
                dayOfCreation={post.createdAt}
              />
            ))}

            <ButtonAll to={"magazine"} text={"All articles"} />
          </div>
          <div>
            <Poster />
            <h3 className='home-popular-tititle'>Most Popular</h3>
            <Popular />
            <Popular />
            <Popular />
            <Form />
          </div>
        </div>
        <div className='home-podcast'>
          <div className='home-podcast__content'>
            <h2 className='big-title'>Podcast</h2>
            <ButtonAll to={"podcast"} text={"All Episodes"} />
          </div>
          <div className='home-podcast__conteiner'>
            <HomePodcast />
            <HomePodcast />
            <HomePodcast />
          </div>
        </div>
        <div className='home-podcast home-authors'>
          <div className='home-podcast__content home-authors__content'>
            <h2 className='big-title'>authors</h2>
            <ButtonAll to={"authors"} text={"All Authors"} />
          </div>
          <div className='home-authors__conteiner'>
            {authors.map((author) => (
              <HomeAuthor
                key={author.user}
                userName={author.fullName}
                userIcon={author.userIcon}
                job={author.job}
                city={author.city}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
