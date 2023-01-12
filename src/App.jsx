import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import styles from "./App.module.scss";
import ChannelDetail from './Components/ChannelDetail/ChannelDetail';
import Feed from './Components/Feed/Feed';
import NavBar from './Components/NavBar/NavBar';
import SearchFeed from './Components/SearchFeed/SearchFeed';
import VideoDetail from './Components/VideoDetail/VideoDetail';

function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
