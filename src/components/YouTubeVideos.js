import React from 'react';
import './YouTubeVideos.css';

const YouTubeVideos = () => {
  // Actual YouTube video IDs from the provided URLs
  const videos = [
    'OfcgeA-DZoI', // https://www.youtube.com/watch?v=OfcgeA-DZoI
    'NthoQyz8U6w', // https://www.youtube.com/watch?v=NthoQyz8U6w
    'zthpdkp7yHQ', // https://www.youtube.com/watch?v=zthpdkp7yHQ
    'UD7MORWTdhA', // https://www.youtube.com/watch?v=UD7MORWTdhA
    'wN2ob97o3mA', // https://youtu.be/wN2ob97o3mA,
	'aznxXNYlYGs' //https://youtu.be/aznxXNYlYGs
  ];

  return (
    <section className="videos-section" id="videos">
      <div className="videos-container">
        <h2 className="section-title">Videa</h2>
        <div className="videos-grid">
          {videos.map((videoId, index) => (
            <div className="video-wrapper" key={index}>
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`M-Dance video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;