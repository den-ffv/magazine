import React from "react";
import "./HomePost.scss";
import homePost from "../../img/home-post.png";
import { Link } from "react-router-dom";
function HomePost() {
  return (
    <Link to={"/fullpost"}>
      <div className='home-post-conteiter'>
        <img src={homePost} alt='img home post' />
        <div className='text-content'>
          <div>
            <h2 className='home-post__title'>Hope dies last</h2>
            <p className='home-post__paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
              vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </p>
          </div>
          <div className='text-content__information-post'>
            <div>
              <p>
                <span>Text</span>Jakob Gronberg
              </p>
              <p>
                <span>Date</span>16. March 2022
              </p>
              <p>
                <span>Duration</span>1 Min
              </p>
            </div>
            <div>
              <p className='text-content__tag'>art</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomePost;
