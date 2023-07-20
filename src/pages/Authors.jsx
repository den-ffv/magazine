import React from "react";
import authorsImg from "../img/authors.svg";
import AuthorCard from "../components/AuthorCard/AuthorCard";

function Authors({ authors }) {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='wrapper'>
      <div>
        <img className='header-img' src={authorsImg} alt='authors' />
      </div>
      <div className='authors-page-wrapper'>
        {authors.map((author) => (
          <AuthorCard
            key={author.user}
            idPost={author.id}
            userName={author.userName}
            userIcon={author.userIcon}
            job={author.job}
            city={author.city}
          />
        ))}

      </div>
    </div>
  );
}

export default Authors;
