import React, { useState, useEffect } from 'react';
import './AboutUs.css';
// Corrected import path
import Gallery, { Lightbox } from '../components/Gallery';

// Helper function to generate image paths
const generateImagePaths = (section, count) => {
    return Array.from({ length: count }, (_, i) =>
        `/images/o-nas/${section}/${section}-${(i + 1).toString().padStart(2, '0')}.webp`
    );
};

const AboutUs = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeGallery, setActiveGallery] = useState([]);

    // --- Image arrays for each section ---
    const snyImages = generateImagePaths('sny', 13);
    const soutezimeImages = generateImagePaths('soutezime', 40);
    const vystupujemeImages = generateImagePaths('vystupujeme', 1);
    const tvorimeImages = generateImagePaths('tvorime', 14);
    const experimentujemeImages = generateImagePaths('experimentujeme', 10);
    const pracujemeImages = generateImagePaths('pracujeme', 10);
    const technikaImages = generateImagePaths('technika', 13);
    const prozivameImages = generateImagePaths('prozivame', 12);
    const komunitaImages = generateImagePaths('komunita', 13);
    const vzdelavaniImages = generateImagePaths('vzdelavani', 9);
    const dolaryImages = generateImagePaths('dolary', 3);

    // --- Lightbox logic ---
    const openLightbox = (images, index) => {
        setActiveGallery(images);
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setActiveGallery([]);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        if (selectedImage === null) return;
        const newIndex = selectedImage + direction;
        if (newIndex >= 0 && newIndex < activeGallery.length) {
            setSelectedImage(newIndex);
        }
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateImage(1);
            if (e.key === 'ArrowLeft') navigateImage(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, activeGallery]);

    return (
        <div className="o-nas-container">
            <h1>O nás</h1>

            <section>
                <h2>Jdeme za svými sny</h2>
                <Gallery images={snyImages} onImageClick={(index) => openLightbox(snyImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Soutěžíme</h2>
                <div className="tiles">
                    <div className="tile">
                        <h3>Mistrovství ČR Czech Dance Tour (skupiny)</h3>
                        <p>2020-2025</p>
                        <p>🥇 8x Zlato</p> <p>🥈 5x Stříbro</p> <p>🥉 3x Bronz</p>
                    </div>
                    <div className="tile">
                        <h3>Mistrovství ČR Czech Dance League (sóla, duety a malé skupiny)</h3>
                        <p>2022-2025</p>
                        <p>🥇 12x Zlato</p> <p>🥈 14x Stříbro</p> <p>🥉 16x Bronz</p>
                    </div>
                    <div className="tile">
                        <h3>WDA World Championships</h3>
                        <p>2022-2025</p>
                        <p>🥇 4x Zlato</p> <p>🥈 4x Stříbro</p> <p>🥉 3x Bronz</p>
                    </div>
                </div>
                <p>Od roku 2024 se také pravidelně účastníme největší světové taneční soutěže World Dance Cup.</p>
                <p>Kromě toho se rádi účastníme i pohárových soutěží, kde naši tanečníci získávají své první soutěžní zkušenosti…</p>
                <Gallery images={soutezimeImages} onImageClick={(index) => openLightbox(soutezimeImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Vystupujeme</h2>
                <p>Například s Pražským filmovým orchestrem.</p>
                <Gallery images={vystupujemeImages} onImageClick={(index) => openLightbox(vystupujemeImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Tvoříme</h2>
                <p>Například každoroční vánoční video.</p>
                <Gallery images={tvorimeImages} onImageClick={(index) => openLightbox(tvorimeImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Experimentujeme</h2>
                <p>Rádi kombinujeme různé taneční styly i tanečníky různých věkových kategorií.</p>
                <Gallery images={experimentujemeImages} onImageClick={(index) => openLightbox(experimentujemeImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Pracujeme na sobě</h2>
                <p>Každoročně mají všichni naši tanečníci možnost nechat se testovat v mezinárodně uznávaném programu Acrobatic Arts.</p>
                <Gallery images={pracujemeImages} onImageClick={(index) => openLightbox(pracujemeImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Věnujeme se správné technice</h2>
                <p>Tak aby se naši tanečníci rozvíjeli zdravě a vyváženě. Trénujeme např. podle programu Progressing ballet technique, Progressing Contemporary technique, Alixa Flexibility, Acrobatics Arts,...</p>
                <Gallery images={technikaImages} onImageClick={(index) => openLightbox(technikaImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Vyjadřujeme se, prožíváme</h2>
                <Gallery images={prozivameImages} onImageClick={(index) => openLightbox(prozivameImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Vytváříme komunitu</h2>
                <Gallery images={komunitaImages} onImageClick={(index) => openLightbox(komunitaImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>Vzděláváme se</h2>
                <Gallery images={vzdelavaniImages} onImageClick={(index) => openLightbox(vzdelavaniImages, index)} layout="scrollable" />
            </section>

            <section>
                <h2>A abychom nezapomněli - máme vlastní měnu!</h2>
                <Gallery images={dolaryImages} onImageClick={(index) => openLightbox(dolaryImages, index)} layout="scrollable" />
            </section>

            <Lightbox
                selectedImage={selectedImage}
                closeLightbox={closeLightbox}
                navigateImage={navigateImage}
                images={activeGallery}
            />
        </div>
    );
};

export default AboutUs;

