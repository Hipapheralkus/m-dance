import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} M-Dance. Všechna práva vyhrazena.
            {' '}|{' '}
            <a href="/docs/vseobecne-obchodni-podminky.pdf" target="_blank" rel="noopener noreferrer">
              Všeobecné obchodní podmínky
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
