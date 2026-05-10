import React from 'react';
import './BannerVideo.css';
import bannerVideo from '../assets/banner-video.mp4';

const BannerVideo = () => {
  return (
    <div className="banner-video-container">
      <video
        className="banner-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={bannerVideo} type="video/mp4" />
        Váš prohlížeč nepodporuje přehrávání videa.
      </video>
      <div className="banner-overlay">
        <h1 className="banner-title">M-Dance</h1>
        <p className="banner-subtitle">Taneční škola pro děti a mládež</p>
      </div>
    </div>
  );
};

export default BannerVideo;
