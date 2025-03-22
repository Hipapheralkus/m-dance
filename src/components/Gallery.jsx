import React, { useState } from 'react';
import './Gallery.css';

// Updated images with webp extension
const galleryImages = [
  '/images/gallery/image1.webp',
  '/images/gallery/image2.webp',
  '/images/gallery/image3.webp',
  '/images/gallery/image4.webp',
  '/images/gallery/image5.webp',
  '/images/gallery/image6.webp',
  '/images/gallery/image7.webp',
  '/images/gallery/image8.webp',
  '/images/gallery/image9.webp',
  '/images/gallery/image10.webp',
  '/images/gallery/image11.webp',
  '/images/gallery/image12.webp',
  '/images/gallery/image13.webp',
  '/images/gallery/image14.webp',
  '/images/gallery/image15.webp'
];

const Gallery = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setSelectedImage(newIndex);
    }
  };

  // Close lightbox with Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight' && selectedImage !== null) {
        navigateImage(1);
      } else if (e.key === 'ArrowLeft' && selectedImage !== null) {
        navigateImage(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="section-title">{title || 'Galerie'}</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`M-Dance soutěžní fotografie ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeLightbox}>
                &times;
              </button>
              <button
                className="nav-button prev"
                onClick={() => navigateImage(-1)}
                disabled={selectedImage === 0}
              >
                &#10094;
              </button>
              <div className="lightbox-image-container">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`M-Dance soutěžní fotografie ${selectedImage + 1}`}
                />
                <div className="image-counter">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </div>
              <button
                className="nav-button next"
                onClick={() => navigateImage(1)}
                disabled={selectedImage === galleryImages.length - 1}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;