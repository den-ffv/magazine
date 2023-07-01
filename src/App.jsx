import React, { useState, useEffect } from "react";
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

function App() {

  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [postsResponse, authorsResponse] = await Promise.all([
        fetch("https://6484ab9aee799e321626e8e2.mockapi.io/data"),
        fetch("https://6484ab9aee799e321626e8e2.mockapi.io/users"),
      ]);
      const [postsData, authorsData] = await Promise.all([
        postsResponse.json(),
        authorsResponse.json(),
      ]);
      const combinedData = postsData.map((post) => {
        const author = authorsData.find((author) => author.user === post.author.user);
        return { ...post, author };
      });

      setPosts(combinedData);
      setAuthors(authorsData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const data = posts;
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home data={data} authors={authors}/>}></Route>
          <Route path='/magazine' element={<Magazine data={data} />}></Route>
          <Route path='/full-post' element={<FullMagazine data={data} />}></Route>
          <Route path='/full-author' element={<FullAuthors />}></Route>
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
