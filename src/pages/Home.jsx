import React, { useState, useEffect } from 'react';
import BannerVideo from '../components/BannerVideo';
import About from '../components/About';
import YouTubeVideos from '../components/YouTubeVideos';
import GalleryGrid, { Lightbox } from '../components/Gallery';
import AktivniMestoBanner from '../components/AktivniMestoBanner.jsx';
import useScrollLock from '../hooks/useScrollLock';
import './Home.css';

const generateHomeImages = (count) =>
  Array.from({ length: count }, (_, i) => `/images/gallery/image${i + 1}.webp`);

const homeImages = generateHomeImages(38);

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useScrollLock(selectedImage !== null);

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < homeImages.length) {
      setSelectedImage(newIndex);
    }
  };

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
      <title>M-Dance | Taneční škola</title>
      <meta name="description" content="M-Dance — taneční škola pro děti a mládež. Jediné certifikované studio Acrobatic Arts v České republice." />
      <BannerVideo />
      <AktivniMestoBanner />
      <div className="home-container">
        <About />
        <YouTubeVideos />
        <section className="gallery-section" id="gallery">
          <h2 className="section-title">Galerie</h2>
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
