import React from "react";
import "./BigPost.scss";
import bigPost from '../../img/big-post.png'
import { Link } from "react-router-dom";
function BigPost() {
  return (
    <Link to={"/fullpost"}>
      <div className='big-post'>
        <div className='big-post__conteiner'>
          <div className='big-post__content'>
          
              <h1 className="big-title">Don’t close your eyes</h1>
            
            <div className="text-content">
              <p className="text-content__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
                vivamus arcu felis bibendum ut. Porttitor leo a diam.
              </p>
              <div className="text-content__information-post">
                <div>
                  <p><span>Text</span>Jakob Gronberg</p>
                  <p><span>Date</span>16. March 2022</p>
                  <p><span>Duration</span>1 Min</p>
                </div>
                <div>
                  <p className="text-content__tag">Label</p>
                </div>
              </div>
            </div>
          </div>
          <img className='big-post__img'src={bigPost} alt="img big post" />
        </div>
      </div>
    </Link>
  );
}

export default BigPost;
