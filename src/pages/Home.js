import React from 'react';
import BannerVideo from '../components/BannerVideo';
import About from '../components/About';
import YouTubeVideos from '../components/YouTubeVideos';
import Gallery from '../components/Gallery';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <BannerVideo />
      <div className="home-container">
        <About />
        <YouTubeVideos />
        <Gallery title="Galerie" />
      </div>
    </div>
  );
};

export default Home;