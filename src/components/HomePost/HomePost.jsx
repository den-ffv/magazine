import React from "react";
import "./HomePost.scss";
import { Link } from "react-router-dom";
import { formatDate } from '../../utils/dateProcessing';
import { calculateReadingTime } from "../../utils/readingTime";
function HomePost({img, title, introduction, text, tag, postAuthor, dayOfCreation, idPost }) {
  return (
    <Link to={`/full-post/${idPost}`}>
      <div className='home-post-conteiter'>
        <img src={`/uploads/${img}`} alt='img home post' />
        <div className='home-post-content'>
          <div>
            <h2 className='home-post__title'>{title}</h2>
            <p className='home-post__paragraph text-content__paragraph'>
              {introduction}
            </p>
          </div>
          <div className='text-content__information-post home-post-information-post'>
            <div>
              <p>
                <span>Text</span>{postAuthor}
              </p>
              <p>
                <span>Date</span>{formatDate(dayOfCreation)}
              </p>
              <p>
                <span>Read</span>{calculateReadingTime(text)} Min
              </p>
            </div>
            <div>
              <p className='text-content__tag'>{tag}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomePost;
