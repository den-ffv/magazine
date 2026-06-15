import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import Magazine from "./pages/Magazine";
import Podcast from "./pages/Podcast";
import Authors from "./pages/Authors";
import FullMagazine from "./pages/FullMagazine";
import FullAuthors from "./pages/FullAuthors";
import FullPodcast from "./pages/FullPodcast";
import siteData from "./data/mockapi.json";

function App() {
  const data = siteData.posts;
  const authors = siteData.authors;
  
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home data={data} authors={authors}/>}></Route>
          <Route path='/magazine' element={<Magazine data={data} />}></Route>
          <Route path='/full-post/:id' element={<FullMagazine morePosts={data}/>}></Route>
          <Route path='/full-author/:id' element={<FullAuthors  authors={authors}/>}></Route>
          <Route path='/full-podcast' element={<FullPodcast />}></Route>
          <Route path='/podcast' element={<Podcast />}></Route>
          <Route path='/authors' element={<Authors authors={authors} />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
