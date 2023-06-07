import React from "react";
import authorsImg from "../img/authors.svg";
import AuthorCard from "../components/AuthorCard/AuthorCard";

function Authors() {
  return (
    <div className='wrapper'>
      <div >
        <img className='header-img' src={authorsImg} alt='authors' />
      </div>
      <div className="authors-page-wrapper">
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
      </div>
    </div>
  );
}

export default Authors;
