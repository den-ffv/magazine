import React from "react";
import "./BigPost.scss";
import bigPost from '../../img/big-post.png'
import { Link } from "react-router-dom";
import { formatDate } from '../../utils/dateProcessing';
import { calculateReadingTime } from "../../utils/readingTime";
function BigPost({img, title, introduction, text, tag, postAuthor, dayOfCreation, idPost }) {
  return (
    <Link to={"/full-post/:id"}>
      <div className='big-post'>
        <div className='big-post__conteiner'>
          <div className='big-post__content'>
          
              <h1 className="big-title">{title}</h1>
            
            <div className="text-content">
              <p className="text-content__paragraph">
                {introduction}
              </p>
              <div className="text-content__information-post">
                <div>
                  <p><span>Text</span>{postAuthor}</p>
                  <p><span>Date</span>{formatDate(dayOfCreation)}</p>
                  <p><span>Duration</span>{calculateReadingTime(text)} Min</p>
                </div>
                <div>
                  <p className="text-content__tag">{tag}</p>
                </div>
              </div>
            </div>
          </div>
          <img className='big-post__img'src={`../uploads/${img}`} alt="img big post" />
        </div>
      </div>
    </Link>
  );
}

export default BigPost;
