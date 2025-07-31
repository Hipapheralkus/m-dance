// src/components/AktivniMestoBanner.jsx
import React from 'react';
import './AktivniMestoBanner.css';

const AktivniMestoBanner = () => {
  return (
    <div className="aktivni-banner">
      <a
        href="https://aktivnimesto.cz/pro-uzivatele/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/aktivniMesto.webp"
          alt="Aktivní Město logo"
          className="aktivni-banner__logo"
        />
        <span className="aktivni-banner__text">
          Využijte příspěvek od města díky programu <strong>Aktivní Město</strong>.
        </span>
      </a>
    </div>
  );
};

export default AktivniMestoBanner;
