import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  // State for lightbox
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0
  });

  // Achievement images array
  const achievementImages = Array.from({ length: 11 }, (_, i) => 
    `/images/achievements/achievement${i + 1}.webp`
  );

  // Open lightbox
  const openLightbox = (index) => {
    setLightbox({
      isOpen: true,
      currentIndex: index
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
    if (lightbox.currentIndex < achievementImages.length - 1) {
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
    <div className="achievements-page">
      <div className="page-header">
        <h1>Soutěžní úspěchy</h1>
      </div>
      
      <div className="achievements-container">
        <div className="achievements-content">
          <h2>Na co jsme pyšní</h2>
          
          <div className="achievement-text">
            <p className="achievement-intro">
              <strong>Patříme mezi přední taneční kluby v Česku.</strong>
            </p>
            
            <p>
              Naši tanečníci soutěží jak v kategorii skupin, tak v kategorii duetů a sól.
            </p>
            
            <p className="achievement-subheading">
              Níže uvádíme výběr úspěchů našich tanečníků:
            </p>

            <div className="achievement-year">
              <h3>Rok 2025</h3>
              <ul>
                <li><strong>Nominace na World Dance Cup 2025 v Burgos, Španělsku:</strong> Naše dvě tanečnice se nominovali z 1. místa.</li>
                <li><strong>Mistrovství Prahy Czech Dance Tour 2025:</strong> Získali jsme 2 zlaté a 1 stříbrnou medaili.</li>
                <li><strong>Mistrovství Čech Czech Dance Tour 2025:</strong> Získali jsme 1 zlatú, 1 bronzovou a 1 finále - všichni postoupili na Mistrovství ČR.</li>
                <li><strong>O cenu starostky města Česká Lípa - 12. ročník:</strong> Získali jsme 2 zlaté, 2 stříbrné, 1 bronzovou a 1 finální umístnění.</li>
                <li><strong>MČR Czech Dance Tour 2025:</strong> Získali jsme 1 stříbrnou, 1 bronzovou a 1 finále - 2 choreografie postoupili na mistrovství světa do Budapešti.</li>
              </ul>
            </div>   

            <div className="achievement-year">
              <h3>Rok 2024</h3>
              <ul>
                <li><strong>Mistrovství ČR Czech Dance League 2024:</strong> 27 sól a duetů, získali jsme 4 zlaté, 4 stříbrné a 4 bronzové medaile.</li>
                <li><strong>WDA World Championship 2024:</strong> Naši tanečníci vybojovali 1 zlatou medaili.</li>
                <li><strong>Open Dance Mission Mladá Boleslav 2024:</strong> Přivezli jsme 2 zlaté medaile.</li>
                <li><strong>MČR Czech Dance Tour 2024:</strong> Získali jsme 1 stříbrnou medaili a měli jsme 3 další tanečníky ve finále.</li>
                <li><strong>Mistrovství Čech Czech Dance Tour 2024:</strong> Získali jsme 1 zlatou, 1 stříbrnou a 1 bronzovou medaili.</li>
                <li><strong>World Dance Cup World Finals 2024:</strong> Po úspěchu na nominační soutěži v Jihlavě postupují naši 3 tanečníci na světové finále, přičemž již mají 1 bronzovou medaili a další 2 finalisty.</li>
                <li><strong>Mistrovství Prahy Czech Dance Tour 2024:</strong> Získali jsme 3 zlaté medaile.</li>
                <li>Jedna naše tanečnice byla přijata na prestižní <strong>University of North Carolina School of the Arts (UNCSA)</strong>.</li>
              </ul>
            </div>
            
            <div className="achievement-year">
              <h3>Rok 2023</h3>
              <ul>
                <li><strong>World Dance Championship WADF 2023:</strong> Vybojovali jsme 1 stříbrnou a 2 bronzové medaile.</li>
                <li><strong>Mistrovství ČR Czech Dance League 2023:</strong> Přivezli jsme celkem 3 zlaté, 4 stříbrné a 4 bronzové medaile.</li>
                <li><strong>Regionální kolo Czech Dance League 2023:</strong> Získali jsme 5 zlatých, 4 stříbrné, 2 bronzové medaile a měli jsme dalších 11 finalistů.</li>
                <li><strong>WDA World Championship 2023:</strong> Vybojovali jsme 3 zlaté, 3 stříbrné a 3 bronzové medaile.</li>
                <li><strong>MČR Czech Dance Tour 2023:</strong> Získali jsme 2 zlaté medaile a 2 další finálová umístění.</li>
                <li><strong>Mistrovství Čech Czech Dance Tour 2023:</strong> Naši tanečníci získali 2 zlaté, 1 bronzovou medaili a další finálové umístění.</li>
                <li><strong>Mistrovství Prahy Czech Dance Tour 2023:</strong> Přivezli jsme 1 zlatou a 3 stříbrné medaile.</li>
                <li>Jedna naše tanečnice úspěšně prošla náročným výběrem na <strong>UNCSA Summer Contemporary Dance Intensive</strong> v USA.</li>
              </ul>
            </div>
            
            <div className="achievement-year">
              <h3>Rok 2022</h3>
              <ul>
                <li><strong>Mistrovství ČR Czech Dance League 2022:</strong> Přivezli jsme 3 zlaté, 3 stříbrné, 3 bronzové medaile a 4 finálová umístění.</li>
                <li><strong>Regionální kolo Czech Dance League 2022:</strong> Celkem 4 zlaté, 3 stříbrné, 3 bronzové medaile a 6 dalších finálových umístění.</li>
                <li><strong>WDA World Championship 2022:</strong> Naši tanečníci získali 1 stříbrnou medaili.</li>
                <li><strong>O cenu starostky města Česká Lípa 2022:</strong> Přivezli jsme 5 zlatých medailí.</li>
                <li><strong>MČR Czech Dance Tour 2022:</strong> Vybojovali jsme 2 stříbrné, 1 bronzovou medaili a další 2 finálová umístění.</li>
                <li><strong>Mistrovství Čech Czech Dance Tour 2022:</strong> Získali jsme 2 zlaté, 1 bronzovou medaili a další 1 finálové umístění.</li>
                <li><strong>Regionální kolo Czech Dance Tour 2022:</strong> Vybojovali jsme 3 zlaté a 1 stříbrnou medaili.</li>
              </ul>
            </div>
            
            <div className="achievement-year">
              <h3>Rok 2021</h3>
              <ul>
                <li><strong>Mistrovství ČR Czech Dance Tour 2021:</strong> Získali jsme 2 zlaté a 1 stříbrnou medaili.</li>
                <li><strong>Online soutěže v roce 2021:</strong> Během online soutěží <em>Czech Dance Masters Online</em>, <em>Crown the Best</em> a <em>O cenu starostky města Česká Lípa</em> jsme získali celkem 6 medailových umístění.</li>
              </ul>
            </div>
            
            <div className="achievement-year">
              <h3>Rok 2020</h3>
              <ul>
                <li><strong>Mistrovství ČR Czech Dance Tour 2020:</strong> Přivezli jsme 4 zlaté a 1 bronzovou medaili.</li>
              </ul>
            </div>
          </div>
          
          <div className="achievements-gallery">
            {achievementImages.map((image, index) => (
              <div 
                className="achievement-image" 
                key={index}
                onClick={() => openLightbox(index)}
              >
                <img src={image} alt={`M-Dance soutěžní úspěch ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for achievement images */}
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
                src={achievementImages[lightbox.currentIndex]} 
                alt={`M-Dance soutěžní úspěch ${lightbox.currentIndex + 1}`} 
              />
              <div className="image-counter">
                {lightbox.currentIndex + 1} / {achievementImages.length}
              </div>
            </div>
            
            <button
              className="nav-button next"
              onClick={nextImage}
              disabled={lightbox.currentIndex === achievementImages.length - 1}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;