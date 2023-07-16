import React, { useEffect, useState } from "react";
import magazineImg from "../img/magazine.svg";
import MagazinPost from "../components/MagazinePost/MagazinePost";
import ButtonAll from "../components/ButtonAll/ButtonAll";
import Loaders from "../components/Loaders/Loaders";

function Magazine({ data }) {
  const [sortTag, setSortTag] = useState(data);
  console.log(sortTag);
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const tag = [];
  data.map((e) => tag.push(e.tag));
  const uniqueTag = tag.filter(function (item, position, array) {
    return array.lastIndexOf(item) === position;
  });

  const showAll = () => {
    setSortTag(data);
  };

  const sortPost = (tag) => {
    const sortedPosts = data.filter((post) => post.tag === tag);
    setSortTag(sortedPosts);
  };
  if (!data) {
    return <Loaders />;
  }
  return (
    <div className='wrapper'>
      <div>
        <img className='header-img' src={magazineImg} alt='magazine' />
      </div>
      <div className='magazine-categories'>
        <p className='magazine-categories__text-p'>Categories</p>
        <div className='magazine-categories__sort'>
          <p onClick={() => showAll()} href='#' className='text-content__tag'>
            all
          </p>
          {uniqueTag.map((tag) => (
            <p
              className='text-content__tag'
              key={tag}
              onClick={() => sortPost(tag)}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className='magazine-posts-wrapper'>
        {!sortPost ? (
          <Loaders />
        ) : (
          sortTag.map((post) => (
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
          ))
        )}
      </div>
      <div className='magazine-next-btn'>
        <ButtonAll to={""} text={"next"} />
      </div>
    </div>
  );
}

export default Magazine;
