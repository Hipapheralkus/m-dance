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
              <a href="https://instagram.com/mdance" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://facebook.com/mdance" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
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
                <p>Parléřova 118, Praha 6 – Hradčany</p>
              </div>
              <div className="location">
                <h4>DanceZone</h4>
                <p>U Chodovského hřbitova 2120/3, Praha 11-Chodov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;