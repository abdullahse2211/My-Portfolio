import React, { useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

export default function ImageLightboxModal({ images = [], initialIndex = 0, title = '', onClose }) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;
  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="lightbox-header">
          <div className="lightbox-header-info">
            <span className="lightbox-project-badge">{title || 'Project Gallery'}</span>
            <span className="lightbox-image-title">{currentImage.label || currentImage.tag || `Image ${currentIndex + 1}`}</span>
            <span className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close image viewer">
            <FiX />
          </button>
        </div>

        {/* Main Stage */}
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>

          <div className="lightbox-img-container">
            <img
              key={currentIndex}
              src={currentImage.url || currentImage}
              alt={currentImage.label || `Slide ${currentIndex + 1}`}
              className="lightbox-main-img"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={handleNext}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Bottom Thumbnails */}
        {images.length > 1 && (
          <div className="lightbox-thumbnails-wrapper">
            <div className="lightbox-thumbnails-strip">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`lightbox-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  title={img.label || `Image ${idx + 1}`}
                >
                  <img src={img.url || img} alt={`Thumb ${idx + 1}`} />
                  <span className="lightbox-thumb-tag">{img.tag || `${idx + 1}`}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
