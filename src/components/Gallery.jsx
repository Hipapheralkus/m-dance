import React, { useRef, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
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
    const [touchDeltaX, setTouchDeltaX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Left' && selectedImage < images.length - 1) {
                navigateImage(1);
            } else if (eventData.dir === 'Right' && selectedImage > 0) {
                navigateImage(-1);
            }
            setTouchDeltaX(0);
            setIsSwiping(false);
        },
        onSwiping: (eventData) => {
            setTouchDeltaX(eventData.deltaX);
            setIsSwiping(true);
        },
        trackMouse: true,
        preventDefaultTouchmoveEvent: true,
        delta: 5,
    });

    useEffect(() => {
        if (selectedImage !== null) {
            if (selectedImage < images.length - 1) {
                const nextImage = new Image();
                nextImage.src = images[selectedImage + 1];
            }
            if (selectedImage > 0) {
                const prevImage = new Image();
                prevImage.src = images[selectedImage - 1];
            }
        }
    }, [selectedImage, images]);

    useEffect(() => {
        setTouchDeltaX(0);
    }, [selectedImage]);

    if (selectedImage === null) return null;

    const renderImage = (index) => {
        if (index < 0 || index >= images.length) {
            return null;
        }

        let transform = 'translateX(0)';
        let zIndex = 1;
        if (index === selectedImage) {
            transform = `translateX(${touchDeltaX}px)`;
            zIndex = 3;
        } else if (index === selectedImage - 1) {
            transform = `translateX(calc(-100% + ${touchDeltaX}px))`;
            zIndex = 2;
        } else if (index === selectedImage + 1) {
            transform = `translateX(calc(100% + ${touchDeltaX}px))`;
            zIndex = 2;
        } else {
            return null;
        }

        return (
            <img
                key={index}
                src={images[index]}
                alt={`M-Dance fotografie ${index + 1}`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                style={{
                    transform: transform,
                    transition: isSwiping ? 'none' : 'transform 0.3s ease-out',
                    zIndex: zIndex,
                    userSelect: 'none',
                }}
            />
        );
    };

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
                <div {...handlers} style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center'}} onDragStart={(e) => e.preventDefault()}>
                    <div
                        className={`lightbox-image-container`}>
                        {renderImage(selectedImage - 1)}
                        {renderImage(selectedImage)}
                        {renderImage(selectedImage + 1)}

                        <div className="image-counter">
                            {selectedImage + 1} / {images.length}
                        </div>
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