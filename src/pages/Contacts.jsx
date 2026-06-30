import React from 'react';
import './Contacts.css';
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/icons';

const Contacts = () => {
  const locations = [
    {
      id: 1,
      name: 'Gymnázium Jana Keplera',
      address: 'Hládkov 224/1, Praha 6 – Hradčany',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.9888389398874!2d14.38738500201975!3d50.08864371089875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b951a70be468d%3A0xd43cf0dfef320f73!2sHl%C3%A1dkov%20224%2F1%2C%20169%2000%20Praha%206-Hrad%C4%8Dany!5e0!3m2!1sen!2scz!4v1742679092633!5m2!1sen!2scz'
    },
    {
      id: 2,
      name: 'DanceZone',
      address: 'U Chodovského hřbitova 2120/3, Praha 11-Chodov',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1724.9016432846022!2d14.511797399744063!3d50.02646779848646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93aa5c5f100d%3A0x9f3c46d782bbcef3!2sDanceZone!5e0!3m2!1sen!2scz!4v1742678739881!5m2!1sen!2scz'
    }
  ];

  return (
    <div className="contacts-page">
      <title>Kontakty | M-Dance</title>
      <meta name="description" content="Kontakty na M-Dance — email, sociální sítě a tréninková místa v Praze: Hládkov 224/1 (Praha 6) a DanceZone (Praha 11)." />
      <link rel="canonical" href="https://m-dance.cz/kontakty" />
      <div className="page-header">
        <h1>Kontakty</h1>
      </div>
      
      <div className="contacts-container">
        <div className="contact-methods">
          <div className="contact-method-card">
            <h2>Email</h2>
            <div className="email-image-container">
              <img 
                src="/images/contact/email-black.png" 
                alt="Kontaktní email" 
                className="email-image"
              />
            </div>
          </div>

          <div className="contact-method-card">
            <h2>Sociální sítě</h2>
            <div className="social-links">
              <a href="https://www.instagram.com/m_dance_prague/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> Instagram
              </a>
              <a href="https://www.facebook.com/mdancejj" target="_blank" rel="noopener noreferrer">
                <FacebookIcon /> Facebook
              </a>
              <a href="https://www.youtube.com/@marcelasmrhova8962" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon /> YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="locations-section">
          <h2>Kde nás najdete</h2>
          
          <div className="locations-grid">
            {locations.map(location => (
              <div className="location-card" key={location.id}>
                <div className="location-info">
                  <h3>{location.name}</h3>
                  <p>{location.address}</p>
                </div>
                <div className="location-map">
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    title={`Mapa - ${location.name}`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;