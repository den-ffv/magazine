import React from "react";
import GoBack from "../components/GoBack/GoBack";
import author from "../img/author.jpg";
import authorsImg from "../img/authors.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";
import "./FullAuthors.scss";
import HomeAuthor from "../components/HomeAuthor/HomeAuthor";
import { useParams } from "react-router-dom";
function FullAuthors({ authors }) {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { id } = useParams();
  const oneAuthonr = authors.filter((author) => author.id == id);

  return (
    <div className='wrapper'>
      <GoBack
        linkTo={"authors"}
        goBackImg={authorsImg}
        goBackImgAlt={"author"}
      />
      {oneAuthonr.map((author) => (
        <>
          <div className='full-post__text-content full-authors'>
            <div className='full-authors__author'>
              <div className='full-authors__author-card'>
                <img
                  src={`/uploads/usersIcon/${author.userIcon}`}
                  alt='author'
                />
              </div>
              <div className='home-author-card__contetn'>
                <p>
                  <span>Follow</span>
                  <div>
                    <a
                      className='social-network__list'
                      href='https://www.instagram.com/'
                      target='_blank'
                    >
                      <img src={instagram} alt='instagram' />
                    </a>
                    <a
                      className='social-network__list'
                      href='https://www.twitter.com/'
                      target='_blank'
                    >
                      <img src={twitter} alt='twitter' />
                    </a>
                    <a
                      className='social-network__list'
                      href='https://www.youtube.com/'
                      target='_blank'
                    >
                      <img src={youtube} alt='youtube' />
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <div className='full-authors__conteinrt'>
              <h1 className='big-title full-authors__title'>
                {author.userName}
              </h1>
              <p className='text-content__paragraph full-post__paragraph full-authors__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
                vivamus arcu felis bibendum ut. Porttitor leo a diam.
              </p>
              <p className='full-post__text'>
                Porttitor rhoncus dolor purus non enim praesent elementum. Eget
                dolor morbi non arcu risus quis varius. Posuere ac ut consequat
                semper viverra nam libero. In ornare quam viverra orci sagittis
                eu. Tristique risus nec feugiat in fermentum posuere urna nec.
                Tempus quam pellentesque nec nam aliquam sem et. Convallis a
                cras semper auctor neque vitae tempus quam pellentesque.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus
                pellentesque. Sed egestas egestas fringilla phasellus faucibus
                scelerisque eleifend donec pretium. Sit amet porttitor eget
                dolor morbi non arcu risus. Justo eget magna fermentum iaculis
                eu non diam phasellus. Sit amet luctus venenatis lectus magna
                fringilla. Neque vitae tempus quam pellentesque nec nam.
              </p>
            </div>
          </div>
        </>
      ))}

      <div className='home-podcast home-authors'>
        {oneAuthonr.map((author) => (
          <div className='home-podcast__content home-authors__content'>
            <h2 className='big-title'>Articles by {author.userName}</h2>
          </div>
        ))}
        <div className='home-authors__conteiner'>
          <HomeAuthor />
          <HomeAuthor />
          <HomeAuthor />
          <HomeAuthor />
        </div>
      </div>
    </div>
  );
}

export default FullAuthors;
