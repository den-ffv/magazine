import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.scss"

import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import youtube from "../../img/youtube.svg";
import rss from "../../img/rss.svg";

function Meun({logo ,items, active, setActive}) {
  return (
    <div className={active ? "menu active-nav-menu" : "menu"} onClick={() => setActive(false)}>
      <div className="menu__content">
        <div className="menu__logo">
          <Link to={"/"}>
            <img  src={logo} alt="logo" />
          </Link>
        </div>
        <ul className='menu__ul'>
          {items.map(item => 
            <li className='menu__list'><Link to={item.href}>{item.value}</Link></li>
          ) }
        </ul>
        <div className='menu__social-network'>
              <li className='social-network__list'>
                <a href='https://www.instagram.com/' target='_blank'>
                  <img src={instagram} alt='instagram' />
                </a>
              </li>
              <li className='social-network__list'>
                <a href='https://www.twitter.com/' target='_blank'>
                  <img src={twitter} alt='twitter' />
                </a>
              </li>
              <li className='social-network__list'>
                <a href='https://www.youtube.com/' target='_blank'>
                  <img src={youtube} alt='youtube' />
                </a>
              </li>
              <li className='social-network__list'>
                <a href='https://www.rss.com/' target='_blank'>
                  <img src={rss} alt='rss' />
                </a>
              </li>
            </div>
      </div>
    </div>
  )
}

export default Meun