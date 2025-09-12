import React, { useRef, useState } from 'react';
import './Gallery.css';

// Generate path to a 400px wide miniature version of an image.
// Thumbnails live next to the original image with a `-min` suffix
// and `.webp` extension. Example: `image.jpg` -> `image-min.webp`.
const getThumbnailPath = (image) => {
    const dotIndex = image.lastIndexOf('.');
    if (dotIndex === -1) return image;
    return `${image.slice(0, dotIndex)}-min.webp`;
};

const Gallery = ({ images, onImageClick, layout = 'grid' }) => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // layout can be 'grid' or 'scrollable'
    const gridClass = layout === 'scrollable' ? 'gallery-grid scrollable' : 'gallery-grid';
    
    // Determine if arrows should be shown
    const showArrows = layout === 'scrollable' && images && images.length > 4;

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
            scrollContainerRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    // --- Swipe/Drag Logic ---
    const onMouseDown = (e) => {
        if (layout !== 'scrollable') return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.classList.add('active');
    };

    const onMouseLeave = () => {
        if (layout !== 'scrollable') return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('active');
    };

    const onMouseUp = () => {
        if (layout !== 'scrollable') return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('active');
    };

    const onMouseMove = (e) => {
        if (!isDragging || layout !== 'scrollable') return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // The multiplier makes the swipe faster
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <div className="gallery-wrapper">
             {showArrows && (
                <button className="scroll-arrow prev" onClick={() => scroll(-1)}>
                    &#10094;
                </button>
            )}
            <div 
                className={gridClass} 
                ref={scrollContainerRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {images.map((image, index) => {
                    const thumbnail = getThumbnailPath(image);
                    return (
                        <div
                            className="gallery-item"
                            key={index}
                            onClick={() => !isDragging && onImageClick(index)} // Prevents click during drag
                        >
                            <img
                                src={thumbnail}
                                alt={`M-Dance fotografie ${index + 1}`}
                                draggable="false"
                                loading="lazy"
                            />
                        </div>
                    );
                })}
            </div>
            {showArrows && (
                 <button className="scroll-arrow next" onClick={() => scroll(1)}>
                    &#10095;
                </button>
            )}
        </div>
    );
};

export const Lightbox = ({ selectedImage, closeLightbox, navigateImage, images }) => {
    if (selectedImage === null) return null;

    return (
        <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeLightbox}>
                    &times;
                </button>
                <button
                    className="nav-button prev"
                    onClick={() => navigateImage(-1)}
                    disabled={selectedImage === 0}
                >
                    &#10094;
                </button>
                <div className="lightbox-image-container">
                    <img
                        src={images[selectedImage]}
                        alt={`M-Dance fotografie ${selectedImage + 1}`}
                    />
                    <div className="image-counter">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
                <button
                    className="nav-button next"
                    onClick={() => navigateImage(1)}
                    disabled={selectedImage === images.length - 1}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Gallery;

