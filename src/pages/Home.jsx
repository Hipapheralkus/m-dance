import React, { useState, useEffect } from 'react';
import BannerVideo from '../components/BannerVideo';
import About from '../components/About';
import YouTubeVideos from '../components/YouTubeVideos';
import GalleryGrid, { Lightbox } from '../components/Gallery'; // Updated import
import AktivniMestoBanner from '../components/AktivniMestoBanner.jsx';
import './Home.css';

// Helper function to generate image paths
// Matches format: /images/gallery/image1.webp, /images/gallery/image2.webp, etc.
const generateHomeImages = (count) => {
    return Array.from({ length: count }, (_, i) => 
        `/images/gallery/image${i + 1}.webp`
    );
};

// Define the images for the main page gallery
const homeImages = generateHomeImages(38);

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // --- Lightbox logic ---
  const openLightbox = (index) => {
      setSelectedImage(index);
      document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
      setSelectedImage(null);
      document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
      if (selectedImage === null) return;
      const newIndex = selectedImage + direction;
      if (newIndex >= 0 && newIndex < homeImages.length) {
          setSelectedImage(newIndex);
      }
  };
  
  // Keyboard navigation for lightbox
  useEffect(() => {
      const handleKeyDown = (e) => {
          if (selectedImage === null) return;
          if (e.key === 'Escape') closeLightbox();
          if (e.key === 'ArrowRight') navigateImage(1);
          if (e.key === 'ArrowLeft') navigateImage(-1);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="home">
      <BannerVideo />
      <AktivniMestoBanner />
      <div className="home-container">
        <About />
        <YouTubeVideos />
        <section className="gallery-section" id="gallery">
          <h2 className="section-title">Galerie</h2>
          {/* Use GalleryGrid without the scrollable prop for the default grid layout */}
          <GalleryGrid images={homeImages} onImageClick={openLightbox} />
        </section>
      </div>
      <Lightbox 
        selectedImage={selectedImage}
        closeLightbox={closeLightbox}
        navigateImage={navigateImage}
        images={homeImages}
      />
    </div>
  );
};

export default Home;