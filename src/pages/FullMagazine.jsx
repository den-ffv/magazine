import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import magazineImg from "../img/magazine.svg";
import arroy from "../img/arroy.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";
import "./FullMagazine.scss";
import ButtonAll from "../components/ButtonAll/ButtonAll";
import MagazinPost from "../components/MagazinePost/MagazinePost";
import GoBack from "../components/GoBack/GoBack";
import axios from "axios";
import Loaders from "../components/Loaders/Loaders";

function FullMagazine({ morePosts }) {
  const [posts, setPosts] = useState(null);
  const [authors, setAuthors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const [postsResponse, authorsResponse] = await Promise.all([
        axios.get(`https://6484ab9aee799e321626e8e2.mockapi.io/data/${id}`),
        axios.get(`https://6484ab9aee799e321626e8e2.mockapi.io/users`),
      ]);
      const [postsData, authorsData] = await Promise.all([
        postsResponse.data,
        authorsResponse.data,
      ]);
      const combinedData = () => {
        const author = authorsData.find((author) => author.id === author.id);
        return { ...postsData, author };
      };

      setPosts(combinedData);
      setAuthors(authorsData);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className='wrapper'>
      <GoBack
        linkTo={"magazine"}
        goBackImg={magazineImg}
        goBackImgAlt={"magazine"}
      />
      <div className='full-post'>
        {!posts ? (
          <Loaders/>
        ) : (
          <>
            <div className='big-post__content full-post__content'>
              <h1 className='big-title full-post__title'>{posts.title}</h1>
              <p className='text-content__paragraph full-post__paragraph'>
                {posts.introduction}
              </p>
            </div>
            <div className='text-content__information-post'>
              <div>
                <p>
                  <span>Text</span>
                  {posts.author.userName}
                </p>
                <p>
                  <span>Date</span>16. March 2022
                </p>
                <p>
                  <span>Read</span>2 Min
                </p>
              </div>
              <div>
                <Link to={"/tegs"} className='text-content__tag'>
                  {posts.tag}
                </Link>
              </div>
            </div>
            <img
              className='full-post__img'
              src={`/uploads/${posts.image}`}
              alt='full-post img'
            />
            <div className='full-post__text-content'>
              <div className='full-post__author'>
                <Link to={"/full-author/:id"}>
                  <div className='full-post__author-card'>
                    <img
                      src={`/uploads/usersIcon/${posts.author.userIcon}`}
                      alt='author'
                    />
                    <h2 className='home-post__title home-author-card__title'>
                      {posts.author.userName}
                    </h2>
                  </div>
                </Link>
                <div className='home-author-card__contetn'>
                  <p>
                    <span>Date</span>16. March 2022
                  </p>
                  <p>
                    <span>Read</span>2 Min
                  </p>
                  <p>
                    <span>Share</span>
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
              <div className='full-post__text-conteinrt'>
                <p className='text-content__paragraph full-post__paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
                  vivamus arcu felis bibendum ut. Porttitor leo a diam.
                </p>
                <p className='full-post__text'>
                  {posts.text}
                  <br />
                  <br />
                  Tellus orci ac auctor augue mauris augue neque gravida. Tempus
                  imperdiet nulla malesuada pellentesque elit eget gravida cum
                  sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis
                  convallis convallis tellus id interdum velit laoreet id.
                  Vulputate mi sit amet mauris commodo quis. Semper viverra nam
                  libero justo laoreet sit amet. Eget nullam non nisi est sit.
                  Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis
                  donec et odio pellentesque diam volutpat. Quis varius quam
                  quisque id diam vel quam elementum. Felis bibendum ut
                  tristique et egestas quis ipsum suspendisse ultrices. Id diam
                  vel quam elementum pulvinar etiam non. Non consectetur a erat
                  nam at lectus urna duis convallis.
                </p>
                <div className='full-post__quote'>
                  <p>
                    The greatest glory in living lies not in never falling, but
                    in rising every time we fall.
                  </p>
                  <span>Nelson Mandela</span>
                </div>
                <p className='text-content__paragraph full-post__paragraph'>
                  Est pellentesque elit ullamcorper dignissim. Consectetur a
                  erat nam at. Blandit libero volutpat sed cras ornare arcu.
                  Iaculis urna id volutpat lacus laoreet. Tincidunt ornare massa
                  eget egestas purus viverra accumsan in. Viverra ipsum nunc
                  aliquet bibendum enim facilisis gravida neque.
                </p>
                <p className='full-post__text'>
                  Vitae turpis massa sed elementum tempus egestas sed. Quam
                  lacus suspendisse faucibus interdum posuere lorem ipsum.
                  Viverra justo nec ultrices dui sapien eget. At risus viverra
                  adipiscing at in tellus integer feugiat. Elementum eu
                  facilisis sed odio morbi quis commodo. Arcu cursus vitae
                  congue mauris rhoncus aenean. Auctor elit sed vulputate mi sit
                  amet mauris commodo quis. Lectus sit amet est placerat in
                  egestas erat imperdiet sed. Eu mi bibendum neque egestas
                  congue quisque. Sit amet luctus venenatis lectus magna
                  fringilla urna porttitor. Pretium vulputate sapien nec
                  sagittis aliquam malesuada bibendum arcu. Sed ullamcorper
                  morbi tincidunt ornare massa eget egestas purus. Pharetra vel
                  turpis nunc eget lorem. Morbi blandit cursus risus at ultrices
                  mi tempus imperdiet nulla. In metus vulputate eu scelerisque
                  felis imperdiet. Elementum pulvinar etiam non quam lacus
                  suspendisse. Sem fringilla ut morbi tincidunt augue. Id
                  venenatis a condimentum vitae sapien. Varius quam quisque id
                  diam vel.
                  <br />
                  <br />
                  Nec feugiat in fermentum posuere urna nec tincidunt praesent
                  semper. Aliquam nulla facilisi cras fermentum. Quam elementum
                  pulvinar etiam non quam lacus suspendisse faucibus interdum.
                  Neque vitae tempus quam pellentesque nec. Interdum consectetur
                  libero id faucibus nisl tincidunt eget nullam. Mattis enim ut
                  tellus elementum sagittis. In fermentum et sollicitudin ac
                  orci phasellus. Est sit amet facilisis magna etiam tempor
                  orci. Lacinia at quis risus sed vulputate odio ut. Egestas
                  egestas fringilla phasellus faucibus scelerisque eleifend.
                  Nunc pulvinar sapien et ligula ullamcorper malesuada proin
                  libero. Aenean vel elit scelerisque mauris pellentesque.
                  Gravida arcu ac tortor dignissim. Ac tortor dignissim
                  convallis aenean.
                </p>
              </div>
            </div>
            <div className='home-podcast'>
              <div className='home-podcast__content'>
                <h2 className='big-title'>Latest Posts</h2>
                <ButtonAll to={"magazine"} text={"See all"} />
              </div>
              <div className='home-podcast__conteiner'>
                {morePosts.slice(0, 3).map((post) => (
                  <MagazinPost
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FullMagazine;
