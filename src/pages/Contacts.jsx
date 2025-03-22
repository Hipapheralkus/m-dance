import React from 'react';
import './Contacts.css';

const Contacts = () => {
  const locations = [
    {
      id: 1,
      name: 'Gymnázium Jana Keplera',
      address: 'Parléřova 118, Praha 6 – Hradčany',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9407934877554!2d14.385383776546097!3d50.08799997152541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b951a98d7374f%3A0x132be1877dc3d082!2sGymn%C3%A1zium%20Jana%20Keplera!5e0!3m2!1scs!2scz!4v1708707423184!5m2!1scs!2scz'
    },
    {
      id: 2,
      name: 'DanceZone',
      address: 'U Chodovského hřbitova 2120/3, Praha 11-Chodov',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.225493283406!2d14.496815776544392!3d50.03317237941807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b925d78b1a3e9%3A0x5d616b7b967de236!2sDanceZone!5e0!3m2!1scs!2scz!4v1708707500563!5m2!1scs!2scz'
    }
  ];

  return (
    <div className="contacts-page">
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
              <a href="https://instagram.com/mdance" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://facebook.com/mdance" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://www.youtube.com/@marcelasmrhova8962" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> YouTube
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
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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