import React, { useState } from 'react';
import './Trainers.css';

const Trainers = () => {
  // Lightbox state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0,
    images: [],
    trainerName: ''
  });

  const trainers = [
    {
      id: 1,
      name: 'Marcela Šmrhová',
      title: 'Trenérka a choreografka',
      photo: '/images/trainers/marcela.webp',
      bio: `Marcela začínala jako moderní gymnastka a později objevila svou vášeň pro tanec. Svět tanečních soutěží poznala z různých úhlů – jako tanečnice se zúčastnila více než 200 soutěží a mnoha dalších jako trenérka a choreografka. Její choreografie v contemporary, lyrical jazzu a jazzu získaly řadu ocenění, včetně několika medailí z mistrovství světa WDA a WADF.
Marcela je tanečnice společenského tance ve třídě S a finalistka evropského šampionátu WDC-AL v kategoriích standard a latina nad 30 let – Blackpool 2022.
Má také velmi ráda lindy hop a authentic jazz, které tančila v několika filmech.
Marcela vlastní studio M-Dance, první taneční studio v České republice certifikované programem AcrobaticArts. Do tohoto programu se zamilovala v roce 2020, protože ji nadchlo, jak dokáže propojit akrobatické prvky s krásou tanečního umění a nabídnout tanečníkům jasně strukturovaný systém vzdělávání. Proto se rozhodla přinést tento program do České republiky.
Marcela je certifikovaná učitelka úrovně M2, mentorka a <a href="https://www.acrobaticarts.com/acrodance-competition-adjudicators" target="_blank" rel="noopener noreferrer">porotkyně</a>.
Jako trenérka a choreografka ráda pracuje s tanečníky, kteří mají otevřenou mysl a jsou ochotni sdílet svou vášeň pro tanec bez ohledu na věk či úroveň pokročilosti. V roli porotkyně oceňuje autenticitu a hravost a vždy chce, aby se tanečníci cítili viděni, a poskytuje jim příležitost užít si soutěžní zkušenost naplno.`,
      certifications: [
        { path: '/images/certifications/marcela_cert_1.webp', alt: 'Certifikace 1' },
        { path: '/images/certifications/marcela_cert_2.webp', alt: 'Certifikace 2' },
        { path: '/images/certifications/marcela_cert_3.webp', alt: 'Certifikace 3' },
        { path: '/images/certifications/marcela_cert_4.webp', alt: 'Certifikace 4' },
        { path: '/images/certifications/marcela_cert_5.png', alt: 'Certifikace 5' },
        { path: '/images/certifications/marcela_cert_6.webp', alt: 'Certifikace 6' },
        { path: '/images/certifications/marcela_cert_7.webp', alt: 'Certifikace 7' }
      ],
      scans: [
        { path: '/images/certifications/marcela_scan_1.webp', alt: 'Certifikát 1' },
        { path: '/images/certifications/marcela_scan_2.webp', alt: 'Certifikát 2' },
        { path: '/images/certifications/marcela_scan_3.webp', alt: 'Certifikát 3' }
      ]
    },
    {
      id: 2,
      name: 'Anna Dvořáková',
      title: 'Trenérka a choreografka M-Dance',
      photo: '/images/trainers/anna.webp',
      certifications: [],
      scans: [
        { path: '/images/certifications/anna_scan.webp', alt: 'Certifikát' }
      ]
    },
    {
      id: 3,
      name: 'Andrej Šimko',
      title: 'Certifikovaný trenér AcrobaticArts',
      photo: '/images/trainers/andrej.webp',
      certifications: [
        { path: '/images/certifications/andrej_cert_1.webp', alt: 'Certifikace 1' },
        { path: '/images/certifications/andrej_cert_2.webp', alt: 'Certifikace 2' },
        { path: '/images/certifications/andrej_cert_3.webp', alt: 'Certifikace 3' },
        { path: '/images/certifications/andrej_cert_4.png', alt: 'Certifikace 4' },
        { path: '/images/certifications/andrej_cert_5.webp', alt: 'Certifikace 5' }
      ],
      scans: []
    },
    {
      id: 4,
      name: 'Andrea Bankó',
      title: 'Certifikovaná trenérka AcrobaticArts',
      photo: '/images/trainers/andrea.webp',
      certifications: [
        { path: '/images/certifications/andrea_cert_1.webp', alt: 'Certifikace 1' }
      ],
      scans: []
    }
  ];

  // Open lightbox with image collection
  const openLightbox = (images, index, trainerName) => {
    setLightbox({
      isOpen: true,
      currentIndex: index,
      images: images,
      trainerName: trainerName
    });
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous image
  const prevImage = () => {
    if (lightbox.currentIndex > 0) {
      setLightbox({
        ...lightbox,
        currentIndex: lightbox.currentIndex - 1
      });
    }
  };

  // Navigate to next image
  const nextImage = () => {
    if (lightbox.currentIndex < lightbox.images.length - 1) {
      setLightbox({
        ...lightbox,
        currentIndex: lightbox.currentIndex + 1
      });
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  return (
    <div className="trainers-page">
      <div className="page-header">
        <h1>Naši trenéři</h1>
      </div>
      
      <div className="trainers-container">
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div className="trainer-card" key={trainer.id}>
              <div className="trainer-photo" onClick={() => openLightbox([{path: trainer.photo, alt: trainer.name}], 0, trainer.name)}>
                <img src={trainer.photo} alt={trainer.name} />
              </div>
              
              <div className="trainer-info">
                <h2>{trainer.name}</h2>
                <p className="trainer-title">{trainer.title}</p>
                
                {trainer.bio && (
                  <div className="trainer-bio" dangerouslySetInnerHTML={{ __html: trainer.bio.replace(/\n/g, '<br>') }}></div>
                )}
                
                {trainer.certifications.length > 0 && (
                  <div className="trainer-certifications">
                    <h3>Certifikace</h3>
                    <div className="cert-grid">
                      {trainer.certifications.map((cert, index) => (
                        <div 
                          className="cert-thumbnail" 
                          key={index}
                          onClick={() => openLightbox(trainer.certifications, index, trainer.name)}
                        >
                          <img src={cert.path} alt={`${trainer.name} ${cert.alt}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {trainer.scans.length > 0 && (
                  <div className="trainer-certification-scan">
                    <h3>Certifikát</h3>
                    <div className="cert-scans">
                      {trainer.scans.map((scan, index) => (
                        <div 
                          className="cert-scan" 
                          key={index} 
                          onClick={() => openLightbox(trainer.scans, index, trainer.name)}
                        >
                          <img src={scan.path} alt={`${trainer.name} ${scan.alt}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeLightbox}>
              &times;
            </button>
            
            <button
              className="nav-button prev"
              onClick={prevImage}
              disabled={lightbox.currentIndex === 0}
            >
              &#10094;
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={lightbox.images[lightbox.currentIndex].path} 
                alt={`${lightbox.trainerName} ${lightbox.images[lightbox.currentIndex].alt}`} 
              />
              <div className="image-counter">
                {lightbox.currentIndex + 1} / {lightbox.images.length}
              </div>
            </div>
            
            <button
              className="nav-button next"
              onClick={nextImage}
              disabled={lightbox.currentIndex === lightbox.images.length - 1}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainers;