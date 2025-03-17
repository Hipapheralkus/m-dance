import React, { useState, useEffect } from 'react';
import './CertificationSlideshow.css';

const CertificationSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const certificationImages = [
    '/images/certified/we_are_certified_1.webp',
    '/images/certified/we_are_certified_2.webp',
    '/images/certified/we_are_certified_3.webp',
    '/images/certified/we_are_certified_4.webp',
    '/images/certified/we_are_certified_5.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === certificationImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [certificationImages.length]);

  return (
    <div className="certification-slideshow">
      <div className="certification-container">
        {certificationImages.map((image, index) => (
          <div 
            key={index} 
            className={`certification-slide ${index === currentImageIndex ? 'active' : ''}`}
          >
            <img 
              src={image} 
              alt={`Certifikace ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSlideshow;