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
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const [hasDragged, setHasDragged] = useState(false);

    const gridClass = layout === 'scrollable' ? 'gallery-grid scrollable' : 'gallery-grid';
    const showArrows = layout === 'scrollable' && images && images.length > 4;

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
            scrollContainerRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    const onMouseDown = (e) => {
        if (layout !== 'scrollable') return;
        isDraggingRef.current = true;
        setHasDragged(false);
        startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.classList.add('active');
    };

    const onMouseLeave = () => {
        if (layout !== 'scrollable') return;
        isDraggingRef.current = false;
        scrollContainerRef.current?.classList.remove('active');
    };

    const onMouseUp = () => {
        if (layout !== 'scrollable') return;
        isDraggingRef.current = false;
        scrollContainerRef.current?.classList.remove('active');
    };

    const onMouseMove = (e) => {
        if (!isDraggingRef.current || layout !== 'scrollable') return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        if (Math.abs(walk) > 5) setHasDragged(true);
        scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    return (
        <div className="gallery-wrapper">
            {showArrows && (
                <button
                    type="button"
                    className="scroll-arrow prev"
                    onClick={() => scroll(-1)}
                    aria-label="Posunout galerii doleva"
                >
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
                        <button
                            type="button"
                            className="gallery-item"
                            key={index}
                            onClick={() => !hasDragged && onImageClick(index)}
                            aria-label={`Otevřít fotografii ${index + 1}`}
                        >
                            <img
                                src={thumbnail}
                                alt={`M-Dance fotografie ${index + 1}`}
                                draggable="false"
                                loading="lazy"
                            />
                        </button>
                    );
                })}
            </div>
            {showArrows && (
                <button
                    type="button"
                    className="scroll-arrow next"
                    onClick={() => scroll(1)}
                    aria-label="Posunout galerii doprava"
                >
                    &#10095;
                </button>
            )}
        </div>
    );
};

export const Lightbox = ({ selectedImage, closeLightbox, navigateImage, images }) => {
    const [isSwiping, setIsSwiping] = useState(false);
    const imgRefs = useRef({});
    const closeBtnRef = useRef(null);
    const lastFocusedRef = useRef(null);

    // Imperatively apply transforms to lightbox images (CSP-safe — CSSOM mutation,
    // not the inline `style` attribute, so works under `style-src-attr 'none'`).
    const applyTransform = (deltaX) => {
        const sel = selectedImage;
        if (sel === null) return;
        const apply = (idx, baseExpr) => {
            const el = imgRefs.current[idx];
            if (!el) return;
            el.style.transform = baseExpr.replace('${dx}', `${deltaX}px`);
        };
        apply(sel - 1, 'translateX(calc(-100% + ${dx}))');
        apply(sel,     'translateX(${dx})');
        apply(sel + 1, 'translateX(calc(100% + ${dx}))');
    };

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Left' && selectedImage < images.length - 1) {
                navigateImage(1);
            } else if (eventData.dir === 'Right' && selectedImage > 0) {
                navigateImage(-1);
            }
            applyTransform(0);
            setIsSwiping(false);
        },
        onSwiping: (eventData) => {
            applyTransform(eventData.deltaX);
            setIsSwiping(true);
        },
        trackMouse: true,
        preventDefaultTouchmoveEvent: true,
        delta: 5,
    });

    useEffect(() => {
        if (selectedImage !== null) {
            if (selectedImage < images.length - 1) {
                const nextImg = new Image();
                nextImg.src = images[selectedImage + 1];
            }
            if (selectedImage > 0) {
                const prevImg = new Image();
                prevImg.src = images[selectedImage - 1];
            }
        }
    }, [selectedImage, images]);

    useEffect(() => {
        // Reset transform / transition each time a new image is selected.
        Object.values(imgRefs.current).forEach((el) => {
            if (!el) return;
            el.style.transition = 'transform 0.3s ease-out';
        });
        applyTransform(0);
    }, [selectedImage]);

    useEffect(() => {
        // Toggle transition while swiping vs. snapping back.
        Object.values(imgRefs.current).forEach((el) => {
            if (!el) return;
            el.style.transition = isSwiping ? 'none' : 'transform 0.3s ease-out';
        });
    }, [isSwiping]);

    useEffect(() => {
        if (selectedImage === null) return undefined;
        lastFocusedRef.current = document.activeElement;
        const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
        const onKey = (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                closeBtnRef.current?.focus();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => {
            clearTimeout(t);
            window.removeEventListener('keydown', onKey);
            if (lastFocusedRef.current && lastFocusedRef.current.focus) {
                lastFocusedRef.current.focus();
            }
        };
    }, [selectedImage]);

    if (selectedImage === null) return null;

    const renderImage = (index) => {
        if (index < 0 || index >= images.length) return null;
        let zClass;
        if (index === selectedImage) zClass = 'lb-img lb-img-current';
        else if (index === selectedImage - 1) zClass = 'lb-img lb-img-prev';
        else if (index === selectedImage + 1) zClass = 'lb-img lb-img-next';
        else return null;

        return (
            <img
                key={index}
                ref={(el) => { imgRefs.current[index] = el; }}
                src={images[index]}
                alt={`M-Dance fotografie ${index + 1}`}
                draggable="false"
                loading="lazy"
                onDragStart={(e) => e.preventDefault()}
                className={zClass}
            />
        );
    };

    return (
        <div
            className="lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Galerie fotografií"
        >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeBtnRef}
                    className="close-button"
                    onClick={closeLightbox}
                    aria-label="Zavřít galerii"
                >
                    &times;
                </button>
                <button
                    type="button"
                    className="nav-button prev"
                    onClick={() => navigateImage(-1)}
                    disabled={selectedImage === 0}
                    aria-label="Předchozí obrázek"
                >
                    &#10094;
                </button>
                <div {...handlers} className="lightbox-swipe-area" onDragStart={(e) => e.preventDefault()}>
                    <div className="lightbox-image-container">
                        {renderImage(selectedImage - 1)}
                        {renderImage(selectedImage)}
                        {renderImage(selectedImage + 1)}

                        <div className="image-counter">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    className="nav-button next"
                    onClick={() => navigateImage(1)}
                    disabled={selectedImage === images.length - 1}
                    aria-label="Další obrázek"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Gallery;
