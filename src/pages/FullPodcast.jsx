import React from "react";
import GoBack from "../components/GoBack/GoBack";
import podcastImgPleare from "../img/podcast-cover.jpg";
import podcastImg from "../img/podcast.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";
import spotify from "../img/spotify.svg";
import apple from "../img/apple.svg";
import soundcloud from "../img/soundcloud.svg";
import "./FullPodcast.scss";
import HomePodcast from "../components/HomePodcast/HomePodcast";
import ButtonAll from '../components/ButtonAll/ButtonAll';

function FullPodcast() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='wrapper full-podcast'>
      <GoBack
        linkTo={"podcast"}
        goBackImg={podcastImg}
        goBackImgAlt={"podcast"}
      />
      <div className='full-post__text-content full-podcast__text-content'>
        <div className='full-post__author full-podcast__author'>
          <div className='full-podcast__author-card'>
            <img
              className='full-podcast__author-img'
              src={podcastImgPleare}
              alt='author'
            />
            <div className='home-author-card__contetn'>
              <p>
                <span>Listen On</span>
                <div>
                  <a
                    className='social-network__list'
                    href='https://www.spotify.com/'
                    target='_blank'
                  >
                    <img src={spotify} alt='instagram' />
                  </a>
                  <a
                    className='social-network__list'
                    href='https://www.apple.com/'
                    target='_blank'
                  >
                    <img src={apple} alt='twitter' />
                  </a>
                  <a
                    className='social-network__list'
                    href='https://www.soundcloud.com/'
                    target='_blank'
                  >
                    <img src={soundcloud} alt='youtube' />
                  </a>
                </div>
              </p>
            </div>
          </div>

          <div className='home-author-card__contetn'>
            <p>
              <span>Date</span>16. March 2022
            </p>
            <p>
              <span>Duration</span>45 Min
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
        <div className='full-post__text-conteinrt full-podcast__text-conteinrt'>
          <p>Episode 01</p>
          <h1 className='big-title full-podcast__title'>
            Save the world from ourselves!
          </h1>
          <p className='text-content__paragraph full-podcast__paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <p className='full-post__text'>
            Porttitor rhoncus dolor purus non enim praesent elementum. Eget
            dolor morbi non arcu risus quis varius. Posuere ac ut consequat
            semper viverra nam libero. In ornare quam viverra orci sagittis eu.
            Tristique risus nec feugiat in fermentum posuere urna nec. Tempus
            quam pellentesque nec nam aliquam sem et. Convallis a cras semper
            auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci
            phasellus egestas tellus rutrum tellus pellentesque. Sed egestas
            egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo
            eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus
            venenatis lectus magna fringilla. Neque vitae tempus quam
            pellentesque nec nam.
            <br />
            <br />
            Tellus orci ac auctor augue mauris augue neque gravida. Tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis
            convallis tellus id interdum velit laoreet id. Vulputate mi sit amet
            mauris commodo quis. Semper viverra nam libero justo laoreet sit
            amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc
            sed blandit libero. Ac felis donec et odio pellentesque diam
            volutpat. Quis varius quam quisque id diam vel quam elementum. Felis
            bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id
            diam vel quam elementum pulvinar etiam non. Non consectetur a erat
            nam at lectus urna duis convallis.
          </p>
          <div className='full-post__quote'>
            <p>
              The greatest glory in living lies not in never falling, but in
              rising every time we fall.
            </p>
            <span>Nelson Mandela</span>
          </div>
          <p className='full-post__text'>
            Vitae turpis massa sed elementum tempus egestas sed. Quam lacus
            suspendisse faucibus interdum posuere lorem ipsum. Viverra justo nec
            ultrices dui sapien eget. At risus viverra adipiscing at in tellus
            integer feugiat. Elementum eu facilisis sed odio morbi quis commodo.
            Arcu cursus vitae congue mauris rhoncus aenean. Auctor elit sed
            vulputate mi sit amet mauris commodo quis. Lectus sit amet est
            placerat in egestas erat imperdiet sed. Eu mi bibendum neque egestas
            congue quisque. Sit amet luctus venenatis lectus magna fringilla
            urna porttitor. Pretium vulputate sapien nec sagittis aliquam
            malesuada bibendum arcu. Sed ullamcorper morbi tincidunt ornare
            massa eget egestas purus. Pharetra vel turpis nunc eget lorem. Morbi
            blandit cursus risus at ultrices mi tempus imperdiet nulla. In metus
            vulputate eu scelerisque felis imperdiet. Elementum pulvinar etiam
            non quam lacus suspendisse. Sem fringilla ut morbi tincidunt augue.
            Id venenatis a condimentum vitae sapien. Varius quam quisque id diam
            vel.
            <br />
            <br />
            Nec feugiat in fermentum posuere urna nec tincidunt praesent semper.
            Aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam
            non quam lacus suspendisse faucibus interdum. Neque vitae tempus
            quam pellentesque nec. Interdum consectetur libero id faucibus nisl
            tincidunt eget nullam. Mattis enim ut tellus elementum sagittis. In
            fermentum et sollicitudin ac orci phasellus. Est sit amet facilisis
            magna etiam tempor orci. Lacinia at quis risus sed vulputate odio
            ut. Egestas egestas fringilla phasellus faucibus scelerisque
            eleifend. Nunc pulvinar sapien et ligula ullamcorper malesuada proin
            libero. Aenean vel elit scelerisque mauris pellentesque. Gravida
            arcu ac tortor dignissim. Ac tortor dignissim convallis aenean.
          </p>
        </div>
      </div>
      <div className='home-podcast'>
          <div className='home-podcast__content'>
            <h2 className='big-title'>Latest Episodes</h2>
            <ButtonAll to={"podcast"} text={"All Episodes"} />
          </div>
          <div className='home-podcast__conteiner'>
            <HomePodcast />
            <HomePodcast />
            <HomePodcast />
          </div>
        </div>
    </div>
  );
}

export default FullPodcast;
