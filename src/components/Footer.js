import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src={logoWhite} alt="M-Dance Logo" />
            </Link>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Menu</h3>
              <ul>
                <li>
                  <Link to="/">Domů</Link>
                </li>
                <li>
                  <Link to="/uspechy">Soutěžní úspěchy</Link>
                </li>
                <li>
                  <Link to="/treneri">Naši trenéři</Link>
                </li>
                <li>
                  <Link to="/kontakty">Kontakty</Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Kontakt</h3>
              <ul>
                <li>
                  <div className="footer-email-image">
                    <img src="/images/contact/email.png" alt="Kontaktní email" className="email-image" />
                  </div>
                </li>
                <li>
                  <a href="https://instagram.com/mdance" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/mdance" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@marcelasmrhova8962" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Tréninková místa</h3>
              <ul>
                <li>Gymnázium Jana Keplera</li>
                <li>Parléřova 118, Praha 6</li>
                <li>DanceZone</li>
                <li>U Chodovského hřbitova 2120/3, Praha 11</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} M-Dance. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;