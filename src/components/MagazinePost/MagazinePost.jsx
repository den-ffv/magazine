import React from "react";
import { Link, useParams } from "react-router-dom";
import "./MagazinePost.scss";
import { formatDate } from '../../utils/dateProcessing';
import { calculateReadingTime } from "../../utils/readingTime";
function MagazinPost({img, title, introduction, text, tag, postAuthor, dayOfCreation, idPost }) {

  return (
    <Link to={`/full-post/${idPost}`}>
      <div className='magazine-post-conteiter'>
        <div className='text-content__information-post home-post-information-post'>
          <div>
            <p>
              <span>Date</span>{formatDate(dayOfCreation)}
            </p>
          </div>
          <div>
            <p className='text-content__tag'>{tag}</p>
          </div>
        </div>
        <img src={`/uploads/${img}`} alt='img home post' />
        <div>
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
                <span>Duration</span>{calculateReadingTime(text)} Min
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MagazinPost;
