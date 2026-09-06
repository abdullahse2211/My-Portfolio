import React, { useEffect, useState } from 'react';
import { FiX, FiCheckCircle, FiBookOpen, FiChevronLeft, FiChevronRight, FiZap, FiLayers, FiActivity } from 'react-icons/fi';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import AnimatedCounter from '../common/AnimatedCounter';

const galleryImages = [
  {
    url: '/images/retinaxplain.jpg',
    caption: 'Neural Network × Fundus Analysis',
    tag: 'Deep Learning'
  },
  {
    url: '/images/bionafnet.jpg',
    caption: 'BioNAFNet Architecture',
    tag: 'Model Design'
  },
  {
    url: '/images/thalcare.jpg',
    caption: 'ThalCare Medical Pipeline',
    tag: 'Medical AI'
  },
  {
    url: '/images/rogueapscanner.jpg',
    caption: 'Rogue AP Scanner System',
    tag: 'Network Security'
  }
];

export default function ProjectModal({ project, onClose, onOpenVideo }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Auto-rotate gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="retina-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        {/* ─── Animated Hero Image Gallery ─── */}
        <div className="retina-modal-hero">
          {/* Floating bg particles */}
          <div className="retina-particles">
            <span className="r-particle p1"></span>
            <span className="r-particle p2"></span>
            <span className="r-particle p3"></span>
            <span className="r-particle p4"></span>
            <span className="r-particle p5"></span>
          </div>

          {/* Gallery image */}
          <img
            key={currentImg}
            src={galleryImages[currentImg].url}
            alt={galleryImages[currentImg].caption}
            className="retina-hero-img"
          />

          {/* Gradient overlay */}
          <div className="retina-hero-overlay"></div>

          {/* Caption badge */}
          <div className="retina-hero-caption">
            <span className="retina-tag">{galleryImages[currentImg].tag}</span>
            <span className="retina-caption-text">{galleryImages[currentImg].caption}</span>
          </div>

          {/* Nav arrows */}
          <button className="retina-nav prev" onClick={handlePrev}><FiChevronLeft /></button>
          <button className="retina-nav next" onClick={handleNext}><FiChevronRight /></button>

          {/* Dots indicator */}
          <div className="retina-dots">
            {galleryImages.map((_, i) => (
              <span
                key={i}
                className={`retina-dot ${i === currentImg ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
              />
            ))}
          </div>
        </div>

        {/* ─── Modal Body ─── */}
        <div className="retina-modal-body">
          {/* Header */}
          <div className="retina-header">
            <span className="project-role" style={{ fontSize: '0.85rem' }}>
              <FiZap style={{ marginRight: '0.3rem' }} />
              {project.role}
            </span>
            <h2 className="retina-title">{project.title}</h2>
            <span className="retina-category">
              <FiActivity style={{ marginRight: '0.3rem' }} />
              {project.category || 'Computer Vision & Deep Learning'} — Preprocessing & Performance Metrics
            </span>
          </div>

          {/* Scope / Description */}
          <p className="retina-scope">
            {project.scope || project.description}
          </p>

          {/* Preprocessing Pipeline Info */}
          <div className="retina-pipeline-section">
            <h4 className="retina-section-label">
              <FiLayers style={{ marginRight: '0.4rem' }} />
              // PREPROCESSING PIPELINE
            </h4>
            <div className="retina-pipeline-grid">
              <div className="retina-pipeline-card">
                <span className="pipeline-step">01</span>
                <strong>Ben Graham Normalization</strong>
                <p>Gaussian-weighted local average subtraction for uniform illumination</p>
              </div>
              <div className="retina-pipeline-card">
                <span className="pipeline-step">02</span>
                <strong>Circular Cropping</strong>
                <p>Automated fundus boundary detection with black-region removal</p>
              </div>
              <div className="retina-pipeline-card">
                <span className="pipeline-step">03</span>
                <strong>Data Augmentation</strong>
                <p>3,662 → ~16,000 samples via rotation, flip, color jitter & elastic transforms</p>
              </div>
              <div className="retina-pipeline-card">
                <span className="pipeline-step">04</span>
                <strong>Class Balancing</strong>
                <p>Weighted sampler + SMOTE-like oversampling for minority DR severity grades</p>
              </div>
            </div>
          </div>

          {/* Benchmark Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="retina-metrics-section">
              <h4 className="retina-section-label">// BENCHMARK METRICS</h4>
              <div className="modal-metrics">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="modal-metric retina-metric-card">
                    <span className="modal-metric-value">
                      <AnimatedCounter
                        value={m.value}
                        numericValue={m.numericValue}
                        suffix={m.suffix || ''}
                        decimals={m.value.includes('.') ? 2 : 0}
                      />
                    </span>
                    <span className="modal-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Technical Achievements */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-highlights">
              <h4>// KEY TECHNICAL ACHIEVEMENTS</h4>
              <ul>
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Publication */}
          {project.publicationStatus && (
            <div className="modal-publication">
              <FiBookOpen style={{ marginRight: '0.5rem' }} />
              <strong>Publication:</strong> {project.publicationStatus}
            </div>
          )}

          {/* Watch Video Demo Action inside modal */}
          {onOpenVideo && (
            <div className="retina-modal-video-cta">
              <button
                type="button"
                className="btn-modal-demo-video"
                onClick={onOpenVideo}
              >
                <FaPlay style={{ fontSize: '0.8rem', marginRight: '0.5rem' }} />
                <span>Watch Full Live Demo Video</span>
                <FaYoutube style={{ fontSize: '1.2rem', marginLeft: '0.5rem', color: '#ff0000' }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
