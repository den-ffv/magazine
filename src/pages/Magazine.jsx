import React from "react";
import magazineImg from "../img/magazine.svg";
import MagazinPost from "../components/MagazinePost/MagazinePost";
import ButtonAll from "../components/ButtonAll/ButtonAll";

function Magazine({ data }) {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='wrapper'>
      <div>
        <img className='header-img' src={magazineImg} alt='magazine' />
      </div>
      <div className='magazine-categories'>
        <p>Categories</p>
        <div className='magazine-categories__sort'>
          <a href='#' className='text-content__tag'>
            all
          </a>
          <a href='#' className='text-content__tag'>
            art
          </a>
          <a href='#' className='text-content__tag'>
            Street Art
          </a>
          <a href='#' className='text-content__tag'>
            Sculptures
          </a>
        </div>
      </div>
      <div className='magazine-posts-wrapper'>
        {data.map((post) => (
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
      {/* <div className="magazine__next-btn"> next <img src="" alt="" /></div> */}
      <div className='magazine-next-btn'>
        <ButtonAll to={""} text={"next"} />
      </div>
    </div>
  );
}

export default Magazine;
