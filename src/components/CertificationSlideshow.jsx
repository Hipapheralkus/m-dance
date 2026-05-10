import React, { useState, useEffect, useRef } from 'react';
import './CertificationSlideshow.css';

const certificationImages = [
  '/images/certified/we_are_certified_1.webp',
  '/images/certified/we_are_certified_2.webp',
  '/images/certified/we_are_certified_3.webp',
  '/images/certified/we_are_certified_4.webp',
  '/images/certified/we_are_certified_5.webp'
];

const SLIDE_INTERVAL = 5000;

const CertificationSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = certificationImages.length;
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % total);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const goTo = (index) => {
    setCurrentImageIndex(((index % total) + total) % total);
  };

  return (
    <div
      className="certification-slideshow"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Certifikace M-Dance"
    >
      <div className="certification-container" aria-live="polite">
        <div className="certification-slide active">
          <img
            src={certificationImages[currentImageIndex]}
            alt={`Certifikace ${currentImageIndex + 1} z ${total}`}
            width="500"
            height="333"
            loading="lazy"
          />
        </div>
      </div>
      <div className="certification-controls">
        <button
          type="button"
          className="cert-nav-button"
          onClick={() => goTo(currentImageIndex - 1)}
          aria-label="Předchozí certifikace"
        >
          &#10094;
        </button>
        <div className="cert-dots" role="tablist">
          {certificationImages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentImageIndex}
              aria-label={`Certifikace ${i + 1}`}
              className={i === currentImageIndex ? 'cert-dot active' : 'cert-dot'}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="cert-nav-button"
          onClick={() => goTo(currentImageIndex + 1)}
          aria-label="Další certifikace"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CertificationSlideshow;
