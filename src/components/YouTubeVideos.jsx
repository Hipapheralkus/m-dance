import React, { useState } from 'react';
import './YouTubeVideos.css';

const YouTubeVideos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // YouTube video data
  const videos = [
    {
      id: 'OfcgeA-DZoI',
      title: 'MČR Czech Dance Tour 2022 - Sound of Silence'
    },
    {
      id: 'NthoQyz8U6w',
      title: 'MČR Czech Dance Tour 2022 - Almost There'
    },
    {
      id: 'zthpdkp7yHQ',
      title: 'MČR Czech Dance Tour 2022 - V dešti'
    },
    {
      id: 'UD7MORWTdhA',
      title: 'MČR Czech Dance Tour 2022 - Jako Mulan'
    },
    {
      id: 'wN2ob97o3mA',
      title: 'Dance World Cup Jihlava 2025 - You Can Be Anything'
    },
    {
      id: 'aznxXNYlYGs',
      title: 'M-Dance vánoční video 2024'
    }
  ];

  const handleVideoClick = (videoId) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="videos-section" id="videos">
      <div className="videos-container">
        <h2 className="section-title">Videa</h2>
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div 
              className="video-thumbnail" 
              key={index}
              onClick={() => handleVideoClick(video.id)}
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                alt={`${video.title} thumbnail`} 
                onError={(e) => {
                  // Fallback to medium quality if maxresdefault doesn't exist
                  e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                }}
              />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
              <div className="video-title">{video.title}</div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeVideo}>&times;</button>
            <div className="video-iframe-container">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&origin=${window.location.origin}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeVideos;