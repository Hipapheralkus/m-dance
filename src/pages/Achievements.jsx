import React, { useState, useEffect, useRef } from 'react';
import './Achievements.css';
import useScrollLock from '../hooks/useScrollLock';

const achievementImages = Array.from({ length: 11 }, (_, i) =>
  `/images/achievements/achievement${i + 1}.webp`
);

const Achievements = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: 0 });
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useScrollLock(lightbox.isOpen);

  const openLightbox = (index, triggerEl) => {
    lastFocusedRef.current = triggerEl || document.activeElement;
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
    if (lastFocusedRef.current && lastFocusedRef.current.focus) {
      lastFocusedRef.current.focus();
    }
  };

  const prevImage = () => {
    setLightbox((prev) => prev.currentIndex > 0 ? { ...prev, currentIndex: prev.currentIndex - 1 } : prev);
  };

  const nextImage = () => {
    setLightbox((prev) => prev.currentIndex < achievementImages.length - 1 ? { ...prev, currentIndex: prev.currentIndex + 1 } : prev);
  };

  useEffect(() => {
    if (!lightbox.isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'Tab') {
        e.preventDefault();
        if (closeBtnRef.current) closeBtnRef.current.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (closeBtnRef.current) closeBtnRef.current.focus();
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  return (
    <div className="achievements-page">
      <title>Soutěžní úspěchy | M-Dance</title>
      <meta name="description" content="Přehled soutěžních úspěchů tanečníků M-Dance — medaile z Mistrovství ČR, WDA World Championship a dalších soutěží." />
      <link rel="canonical" href="https://m-dance.cz/uspechy" />
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
                <li><strong>World Dance Cup 2025 v Burgos, Španělsku:</strong> Dvě naše tanečnice úspěšně reprezentovali ČR.</li>
                <li><strong>WDA  World Championship 2025 v Budapešti:</strong> Dvě semifinále a 8 finálových umístnění</li>
                <li><strong>Nominace na World Dance Cup 2025 v Burgos, Španělsku:</strong> Naše dvě tanečnice se nominovali z 1. místa.</li>
                <li><strong>Mistrovství Prahy Czech Dance Tour 2025:</strong> Získali jsme 2 zlaté a 1 stříbrnou medaili.</li>
                <li><strong>Mistrovství Čech Czech Dance Tour 2025:</strong> Získali jsme 1 zlatú, 1 bronzovou a 1 finále - všichni postoupili na Mistrovství ČR.</li>
                <li><strong>O cenu starostky města Česká Lípa - 12. ročník:</strong> Získali jsme 2 zlaté, 2 stříbrné, 1 bronzovou a 1 finální umístnění.</li>
                <li><strong>MČR Czech Dance Tour 2025:</strong> Získali jsme 1 stříbrnou, 1 bronzovou a 1 finále - 2 choreografie postoupili na mistrovství světa do Budapešti.</li>
                <li><strong>Open Dance Mission Mladá Boleslav - 9. ročník</strong> Získali jsme 3 zlaté, 3 stříbrné, 2 bronzové a 1 finále.</li>
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
              <button
                type="button"
                className="achievement-image"
                key={index}
                onClick={(e) => openLightbox(index, e.currentTarget)}
                aria-label={`Otevřít obrázek úspěchu ${index + 1}`}
              >
                <img src={image} alt={`M-Dance soutěžní úspěch ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox.isOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie úspěchů"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeBtnRef}
              className="close-button"
              onClick={closeLightbox}
              aria-label="Zavřít galerii"
            >
              &times;
            </button>

            <button
              className="nav-button prev"
              onClick={prevImage}
              disabled={lightbox.currentIndex === 0}
              aria-label="Předchozí obrázek"
            >
              &#10094;
            </button>

            <div className="lightbox-image-container">
              <img
                src={achievementImages[lightbox.currentIndex]}
                alt={`M-Dance soutěžní úspěch ${lightbox.currentIndex + 1}`}
                loading="lazy"
              />
              <div className="image-counter">
                {lightbox.currentIndex + 1} / {achievementImages.length}
              </div>
            </div>

            <button
              className="nav-button next"
              onClick={nextImage}
              disabled={lightbox.currentIndex === achievementImages.length - 1}
              aria-label="Další obrázek"
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
