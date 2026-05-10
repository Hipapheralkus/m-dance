import React, { useState, useEffect, useRef } from 'react';
import './YouTubeVideos.css';
import useScrollLock from '../hooks/useScrollLock';

const videos = [
  { id: 'OfcgeA-DZoI', title: 'MČR Czech Dance Tour 2022 - Sound of Silence' },
  { id: 'NthoQyz8U6w', title: 'MČR Czech Dance Tour 2022 - Almost There' },
  { id: 'zthpdkp7yHQ', title: 'MČR Czech Dance Tour 2022 - V dešti' },
  { id: 'UD7MORWTdhA', title: 'MČR Czech Dance Tour 2022 - Jako Mulan' },
  { id: 'wN2ob97o3mA', title: 'Dance World Cup Jihlava 2025 - You Can Be Anything' },
  { id: 'aznxXNYlYGs', title: 'M-Dance vánoční video 2024' },
  { id: 'Fi4WXr73z_4', title: 'Czech Dance Tour Praha 2025' },
  { id: 'JSCJoDfv7K4', title: 'Czech Dance Tour 2024 - The playful master' },
  { id: 'SBGeqxLg4ec', title: 'MČR Czech Dance Tour 2024 - Heaven' },
  { id: 'qnioJNua2qM', title: 'Czech Dance Tour 2020 - Dopis' },
  { id: 'wNDDtKCiSZ8', title: 'Vystoupení M-Dance dětí na 1. plese Pražského filmového orchestru - Večerníčky' }
];

const YouTubeVideos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useScrollLock(activeVideo !== null);

  const handleVideoClick = (videoId, triggerEl) => {
    lastFocusedRef.current = triggerEl || document.activeElement;
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    if (lastFocusedRef.current && lastFocusedRef.current.focus) {
      lastFocusedRef.current.focus();
    }
  };

  useEffect(() => {
    if (!activeVideo) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeVideo();
      else if (e.key === 'Tab') {
        e.preventDefault();
        if (closeBtnRef.current) closeBtnRef.current.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    if (closeBtnRef.current) closeBtnRef.current.focus();
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeVideo]);

  return (
    <section className="videos-section" id="videos">
      <div className="videos-container">
        <h2 className="section-title">Videa</h2>
        <div className="videos-grid">
          {videos.map((video) => (
            <button
              type="button"
              className="video-thumbnail"
              key={video.id}
              onClick={(e) => handleVideoClick(video.id, e.currentTarget)}
              aria-label={`Přehrát video: ${video.title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                width="480"
                height="360"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
                }}
              />
              <div className="play-button" aria-hidden="true">
                <i className="fas fa-play"></i>
              </div>
              <div className="video-title">{video.title}</div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="video-modal"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label="YouTube video"
        >
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeBtnRef}
              className="close-modal"
              onClick={closeVideo}
              aria-label="Zavřít video"
            >
              &times;
            </button>
            <div className="video-iframe-container">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeVideos;
