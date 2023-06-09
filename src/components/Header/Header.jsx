import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import logo from "../../assets/fyrre_magazine.svg";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import youtube from "../../img/youtube.svg";
import rss from "../../img/rss.svg";
import Menu from "../Menu/Menu";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Magazine", href: "/magazine" },
    { value: "Authors", href: "/authors" },
    { value: "Podcast", href: "/podcast" },
  ];
  return (
    <div className="header">

      <div className='wrapper'>
        <header className='header-wrapper'>
          <div className='logo'>
            <Link to={"/"}>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <nav className='header-nav'>
            {items.map((item) => (
              <li className='header-nav__list'>
                <Link to={item.href}>{item.value}</Link>
              </li>
            ))}
            <div className='social-network'>
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
          </nav>
          {/* <div className='menu__button'>
            <button onClick={() => setMenuActive(!menuActive)}>open</button>
          </div> */}
          <div class={!menuActive ? 'menu-icon': 'menu-icon active'}>
            <input onClick={() => setMenuActive(!menuActive)} class='menu-icon__cheeckbox' type='checkbox' />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
      </div>
      <Menu
        logo={logo}
        active={menuActive}
        setActive={setMenuActive}
        items={items}
      />
    </div>
  );
}

export default Header;
