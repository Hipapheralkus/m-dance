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
Marcela je tanečnice společenského tance ve třídě M a finalistka evropského šampionátu WDC-AL v kategoriích standard a latina nad 30 let – Blackpool 2022. Je držitelkou <a href="https://www.csts.cz/cs/Evidence/SeznamTreneru" target="_blank" rel="noopener noreferrer">trénerské licence</a> III. třídy Českého Svazu Tanečního Sportu.
Má také velmi ráda lindy hop a authentic jazz, které tančila v několika filmech.
Marcela vlastní studio M-Dance, první taneční studio v České republice certifikované programem AcrobaticArts. Do tohoto programu se zamilovala v roce 2020, protože ji nadchlo, jak dokáže propojit akrobatické prvky s krásou tanečního umění a nabídnout tanečníkům jasně strukturovaný systém vzdělávání. Proto se rozhodla přinést tento program do České republiky.
Marcela je certifikovaná učitelka úrovně M2, mentorka a <a href="https://www.acrobaticarts.com/acrodance-competition-adjudicators" target="_blank" rel="noopener noreferrer">porotkyně</a>.
Jako trenérka a choreografka ráda pracuje s tanečníky, kteří mají otevřenou mysl a jsou ochotni sdílet svou vášeň pro tanec bez ohledu na věk či úroveň pokročilosti. V roli porotkyně oceňuje autenticitu a hravost a vždy chce, aby se tanečníci cítili viděni, a poskytuje jim příležitost užít si soutěžní zkušenost naplno.`,
      certifications: [
        { path: '/images/certifications/marcela_cert_1.webp', alt: 'Acrobatic Arts Certified Teacher Module 1' },
        { path: '/images/certifications/marcela_cert_2.webp', alt: 'Acrobatic Arts Certified Teacher Aerial & Back Handspring' },
        { path: '/images/certifications/marcela_cert_3.webp', alt: 'Acrobatic Arts Certified Teacher Module 2' },
        { path: '/images/certifications/marcela_cert_4.webp', alt: 'Acrobatic Arts Teacher Workshop Mentor Workshop' },
        { path: '/images/certifications/marcela_cert_5.png', alt: 'Acrobatic Arts Teacher Workshop Aerial Progressions' },
        { path: '/images/certifications/marcela_cert_6.webp', alt: 'Acrobatic Arts Teacher Workshop Flexibility & Contortion' },
        { path: '/images/certifications/marcela_cert_7.webp', alt: 'Acrobatic Arts Certified Adjudicator' }
      ],
      scans: [
        { path: '/images/certifications/marcela_scan_1.webp', alt: 'Certification in Progressing Ballet Technique' },
        { path: '/images/certifications/marcela_scan_2.webp', alt: 'Certificate Alixa Flexibility Module One' },
        { path: '/images/certifications/marcela_scan_3.webp', alt: 'Osvědčení Tréner Tanečních Sportů III. Třídy' },
        { path: '/images/certifications/marcela_scan_4.webp', alt: 'Osvědčení Tréner Tanečních Sportů II. Třídy' },
        { path: '/images/certifications/marcela_scan_5.webp', alt: 'Osvědčení Tréner a Porotce III. Třídy ČSTS' },
        { path: '/images/certifications/marcela_scan_6.webp', alt: 'Certification in Progressing Contemporary Technique' }
      ]
    },
    {
      id: 2,
      name: 'Anna Dvořáková',
      title: 'Trenérka a choreografka M-Dance',
      photo: '/images/trainers/anna.webp',
      certifications: [],
      scans: [
        { path: '/images/certifications/anna_scan.webp', alt: 'Osvěčení Tréner Tanečních Sportů III. Třídy' }
      ]
    },
    {
      id: 3,
      name: 'Andrej Šimko',
      title: 'Certifikovaný trenér AcrobaticArts a Českého Svazu Tanečního Sportu',
      photo: '/images/trainers/andrej.webp',
      bio: `Andrej se tanci věnuje od roku 2006. Mezinárodní třídu M ve standardních tancích si v hlavní kategorii vytančil hned dvakrát – poprvé za brněnský klub TK Orel Telnice v roce 2012 a podruhé za pražský klub TK Sparta Praha v roce 2022. Jako člen české reprezentace startoval na univerzitním mistrovství Evropy v Dněpropetrovsku a během své závodní kariéry absolvoval více než 300 soutěží.
Mezi jeho nejvýznamnější úspěchy patří titul vicemistra světa ve standardních tancích WDC-AL Over 30 Ballroom v holandském Assenu (2021) a účast ve finálových kolech standardu a latiny na evropském šampionátu v Blackpoolu (2022). Na mistrovství světa WDC-AL v hlavní kategorii v Assenu 2021 byl prvním nepostupujícím párem do čtvrtfinále během galavečera. K dalším pozoruhodným výkonům patří finále Mistrovství ČR družstev v Brně (2018) a čtvrtfinále otevřeného mistrovství ve valčíku ve Vídni (2018), kde porazili 94 párů.
Dvakrát, v letech 2015 a 2018, organizoval mezinárodní soutěž ETDS (European Tournament for Dancing Students), kde soutěžilo více než 300 účastníků z celého světa.
Od roku 2022 se věnuje výuce akrobacie a v rámci mezinárodního programu Acrobatic Arts získal certifikát Module One (2023) a následně Module Two v anglickém Leedsu (2024). V rámci M-Dance se Andrej věnuje nejen výuce akrobacie, ale i technickým aspektům spojeným s činností klubu.
V roce 2025 mu byla udělena trenérská a porotcovská licence <a href="https://www.csts.cz/cs/Evidence/SeznamTreneru" target="_blank" rel="noopener noreferrer">trenéra</a> III. třídy u Českého svazu tanečního sportu. Jeho trenérská dráha je navíc ozdobena dosažením hlavní třídy A ve standardních tancích se svým párem.`,
      certifications: [
        { path: '/images/certifications/andrej_cert_1.webp', alt: 'Acrobatic Arts Certified Teacher Module 1' },
        { path: '/images/certifications/andrej_cert_2.webp', alt: 'Acrobatic Arts Certified Teacher Aerial & Back Handspring' },
        { path: '/images/certifications/andrej_cert_3.webp', alt: 'Acrobatic Arts Certified Teacher Module 2' },
        { path: '/images/certifications/andrej_cert_4.png', alt: 'Acrobatic Arts Teacher Workshop Aerial Progressions' },
        { path: '/images/certifications/andrej_cert_5.webp', alt: 'Acrobatic Arts Teacher Workshop Flexibility & Contortion' }
      ],
      scans: [
        { path: '/images/certifications/andrej_scan_1.webp', alt: 'Osvědčení o rekvalifikaci Zdravotník zotavovacích akcí' },
        { path: '/images/certifications/andrej_scan_2.webp', alt: 'Osvědčení Tréner a Porotce III. Třídy ČSTS' }
      ]
    },
    {
      id: 4,
      name: 'Andrea Bankó',
      title: 'Certifikovaná trenérka AcrobaticArts',
      photo: '/images/trainers/andrea.webp',
      certifications: [
        { path: '/images/certifications/andrea_cert_1.webp', alt: 'Acrobatic Arts Certified Teacher Module 1' }
      ],
      scans: [
        { path: '/images/certifications/andrea_scan_1.webp', alt: 'Osvědčení o rekvalifikaci Zdravotník zotavovacích akcí' },
      ]
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
              <div className="trainer-header">
                <div className="trainer-photo" onClick={() => openLightbox([{path: trainer.photo, alt: trainer.name}], 0, trainer.name)}>
                  <img src={trainer.photo} alt={trainer.name} />
                </div>
                <div className="trainer-info">
                  <h2>{trainer.name}</h2>
                  <p className="trainer-title">{trainer.title}</p>
                  {trainer.bio && (
                    <div className="trainer-bio" dangerouslySetInnerHTML={{ __html: trainer.bio.replace(/\n/g, '<br>') }}></div>
                  )}
                </div>
              </div>
              {trainer.certifications.length > 0 && (
                <div className="trainer-certifications">
                  <h3>Acrobatic Arts Badges</h3>
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
                  <h3>Certifikáty</h3>
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