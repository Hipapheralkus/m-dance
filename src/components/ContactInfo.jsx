import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Kontakt</h2>
        <div className="contact-content">
          <div className="contact-card">
            <h3>Sociální sítě</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/m_dance_prague/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-hidden="true"></i> Instagram
              </a>
              <a href="https://www.facebook.com/mdancejj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" aria-hidden="true"></i> Facebook
              </a>
              <a href="https://www.youtube.com/@marcelasmrhova8962" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" aria-hidden="true"></i> YouTube
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:info@m-dance.cz">info@m-dance.cz</a>
            </p>
          </div>

          <div className="contact-card">
            <h3>Tréninková místa</h3>
            <div className="locations">
              <div className="location">
                <h4>Gymnázium Jana Keplera</h4>
                <p>Hládkov 224/1, Praha 6 – Hradčany</p>
              </div>
              <div className="location">
                <h4>DanceZone</h4>
                <p>U Chodovského hřbitova 2120/3, Praha 11 – Chodov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
