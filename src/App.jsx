import React from "react";
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

function App() {
  return (
    <div className='App'>
      <Header />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/magazine' element={<Magazine />}></Route>
          <Route path='/full-post' element={<FullMagazine/>}></Route>
          <Route path='/full-author' element={<FullAuthors/>}></Route>
          <Route path='/podcast' element={<Podcast />}></Route>
          <Route path='/authors' element={<Authors />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
