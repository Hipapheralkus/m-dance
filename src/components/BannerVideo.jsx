import React, { useEffect, useState } from 'react';
import './BannerVideo.css';
import bannerVideo from '../assets/banner-video.mp4';

const BannerVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="banner-video-container">
      <video 
        className="banner-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        // For mobile devices, add the following attributes for better performance
        preload="auto"
        // The objectPosition style helps show more horizontal content
        style={isMobile ? { objectPosition: '50% 50%' } : {}}
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