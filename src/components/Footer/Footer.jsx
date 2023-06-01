import RunningText from "../RunningText/RunningText";
import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo_white from "../../assets/fyrre_magazine-white.svg";
import instagram_white from "../../img/instagram-white.svg";
import twitter_white from "../../img/twitter-white.svg";
import youtube_white from "../../img/youtube-white.svg";
import rss_white from "../../img/rss-white.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <RunningText text={"Newsletter+++"} repeatCount={14} />
      <div className='wrapper'>
        <div className='footer__conteiner-form'>
          <h2 className='footer__form-title'>Design News to your inbox</h2>
          <form className='footer__form' action='#'>
            <input
              className='footer__form-input-email'
              type='email'
              placeholder='Email'
            />
            <div className='footer__form-button'>
              <button className='button button--white'>Sign up</button>
            </div>
          </form>
        </div>
        <div className='footer__nav'>
          <div className='logo'>
            <Link to={"/"}>
              <img src={logo_white} alt='logo' />
            </Link>
          </div>
          <div className='footer__nav-content'>
            <ul>
              <li>
                <a href='#'>Art</a>
              </li>
              <li>
                <a href='#'>Design</a>
              </li>
              <li>
                <a href='#'>Architecture</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#'>Magazine</a>
              </li>
              <li>
                <a href='#'>Podcast</a>
              </li>
              <li>
                <a href='#'>Authors</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#'>Styleguide</a>
              </li>
              <li>
                <a href='#'>Licensing</a>
              </li>
              <li>
                <a href='#'>Changelog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__social-network'>
          <p>© Made by Pawel Gola - Powered by Webflow</p>
          <div className=''>
            <li className='social-network__list'>
              <a href='https://www.instagram.com/' target='_blank'>
                <img src={instagram_white} alt='instagram' />
              </a>
            </li>
            <li className='social-network__list'>
              <a href='https://www.twitter.com/' target='_blank'>
                <img src={twitter_white} alt='twitter' />
              </a>
            </li>
            <li className='social-network__list'>
              <a href='https://www.youtube.com/' target='_blank'>
                <img src={youtube_white} alt='youtube' />
              </a>
            </li>
            <li className='social-network__list'>
              <a href='https://www.rss.com/' target='_blank'>
                <img src={rss_white} alt='rss' />
              </a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
