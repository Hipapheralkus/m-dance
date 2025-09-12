import React, { useState, useEffect } from 'react';
import BannerVideo from '../components/BannerVideo';
import About from '../components/About';
import YouTubeVideos from '../components/YouTubeVideos';
import GalleryGrid, { Lightbox } from '../components/Gallery'; // Updated import
import AktivniMestoBanner from '../components/AktivniMestoBanner.jsx';
import './Home.css';

// Define the images for the main page gallery
const homeImages = [
  '/images/gallery/image1.webp', '/images/gallery/image2.webp', '/images/gallery/image3.webp',
  '/images/gallery/image4.webp', '/images/gallery/image5.webp', '/images/gallery/image6.webp',
  '/images/gallery/image7.webp', '/images/gallery/image8.webp', '/images/gallery/image9.webp',
  '/images/gallery/image10.webp', '/images/gallery/image11.webp', '/images/gallery/image12.webp',
  '/images/gallery/image13.webp', '/images/gallery/image14.webp', '/images/gallery/image15.webp',
  '/images/gallery/image16.webp', '/images/gallery/image17.webp', '/images/gallery/image18.webp',
  '/images/gallery/image19.webp', '/images/gallery/image20.webp', '/images/gallery/image21.webp',
  '/images/gallery/image22.webp', '/images/gallery/image23.webp', '/images/gallery/image24.webp',
  '/images/gallery/image25.webp', '/images/gallery/image26.webp', '/images/gallery/image27.webp',
  '/images/gallery/image28.webp', '/images/gallery/image29.webp', '/images/gallery/image30.webp',
  '/images/gallery/image31.webp'
];

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
