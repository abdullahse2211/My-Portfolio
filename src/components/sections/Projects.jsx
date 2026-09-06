import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ProjectModal from './ProjectModal';
import VideoModal from './VideoModal';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiCpu, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaYoutube, FaPlay } from 'react-icons/fa';

export default function Projects({ projects = [] }) {
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const revealRef = useScrollReveal();

  // Fallback data if projects prop is empty
  const project = projects[0] || {
    title: 'RetinaXplain',
    subtitle: 'A Hybrid CNN-Vision Transformer Framework for Diabetic Retinopathy Severity Classification',
    role: 'Sole Researcher & Developer',
    description:
      'An independently developed, explainable framework for 5-class diabetic retinopathy severity classification. Processed 3,662 APTOS 2019 fundus images (augmented to ~16,000 instances) using Ben Graham normalization, circular cropping, and illumination correction. Swin Transformer Tiny achieved the strongest result with 85.27% validation accuracy and 0.7216 macro-F1.',
    features:
      'Features single-model inference, simultaneous 3-model weighted soft voting ensembling, and a locally deployable multi-page Streamlit application with processing-time monitoring and downloadable JSON records.',
    techTags: ['PyTorch', 'Swin Transformer', 'ViT-B/16', 'EfficientNet-B3', 'Streamlit', 'OpenCV', 'Medical AI'],
    githubUrl: 'https://github.com/abdullahse2211/diabetic-retinopathy-classification',
    videoUrl: 'https://youtu.be/MnS1vS5ZLqU?si=td3M1nW6vMmZRVf5',
    videoId: 'MnS1vS5ZLqU',
    metrics: [
      { label: 'Validation Accuracy', value: '85.27%' },
      { label: 'Macro-F1 Score', value: '0.7216' },
      { label: 'Training Samples', value: '~16,000' },
      { label: 'Models Ensembled', value: '3' }
    ],
    image: '/Dashboard1.jpg',
    images: [
      {
        url: '/Dashboard1.jpg',
        label: 'Fundus Image Analysis & Classification',
        tag: 'Dashboard 1',
        path: 'retinaxplain.ai/analysis'
      },
      {
        url: '/Dashboard2.jpg',
        label: 'Session Analytics & Model Performance',
        tag: 'Dashboard 2',
        path: 'retinaxplain.ai/analytics'
      }
    ]
  };

  const slides = project.images || [
    {
      url: project.image || '/Dashboard1.jpg',
      label: 'Fundus Image Analysis & Classification',
      tag: 'Dashboard 1',
      path: 'retinaxplain.ai/analysis'
    },
    {
      url: '/Dashboard2.jpg',
      label: 'Session Analytics & Model Performance',
      tag: 'Dashboard 2',
      path: 'retinaxplain.ai/analytics'
    }
  ];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="ACADEMIC RESEARCH & CAPSTONE"
          title="Academic Project"
          subtitle="SOTA explainable medical computer vision framework shipped with full inference frontend."
          className="text-center"
        />

        <div ref={revealRef} className="project-spotlight-wrapper reveal">
          {/* Left Column: Project Details & Metrics */}
          <div className="project-spotlight-details">
            <div className="project-spotlight-header">
              <div className="spotlight-badge-row">
                <span className="spotlight-role-badge">
                  <FiCpu style={{ marginRight: '0.4rem' }} /> {project.role}
                </span>
                <span className="spotlight-academic-badge">
                  Academic Capstone Project
                </span>
              </div>
              <h3 className="spotlight-title">{project.title}</h3>
              <p className="spotlight-subtitle">{project.subtitle}</p>
            </div>

            <p className="spotlight-description">{project.description}</p>

            <div className="spotlight-features-box">
              <span className="features-box-label">// ARCHITECTURE & DEPLOYMENT</span>
              <p>{project.features}</p>
            </div>

            {/* Benchmark Metrics Grid */}
            <div className="spotlight-metrics-grid">
              {project.metrics?.map((m, idx) => (
                <div key={idx} className="spotlight-metric-card">
                  <span className="spotlight-metric-value">{m.value}</span>
                  <span className="spotlight-metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="spotlight-tags-container">
              {project.techTags?.map((tag, tIdx) => (
                <Badge key={tIdx} text={tag} />
              ))}
            </div>

            {/* Actions: Demo Video, GitHub, Inspect */}
            <div className="spotlight-actions">
              <button
                type="button"
                className="btn-demo-video-pulse"
                onClick={() => setShowVideoModal(true)}
                aria-label="Watch Demo Video"
              >
                <span className="demo-video-icon-wrap">
                  <FaPlay style={{ fontSize: '0.75rem', marginLeft: '1px' }} />
                </span>
                <span>Watch Demo Video</span>
                <span className="demo-video-yt-tag"><FaYoutube /></span>
              </button>

              <a
                href={project.githubUrl || 'https://github.com/abdullahse2211'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" icon={FiGithub}>
                  GitHub <FiExternalLink style={{ marginLeft: '0.2rem' }} />
                </Button>
              </a>

              <Button variant="outline" onClick={() => setShowModal(true)}>
                Inspect Preprocessing
              </Button>
            </div>
          </div>

          {/* Right Column: Desktop Mockup Frame with Dashboard Slider */}
          <div className="project-spotlight-frame">
            <div className="preview-browser-chrome">
              <div className="preview-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>

              <div className="preview-url-bar">
                <span>{slides[activeSlide]?.path || 'retinaxplain.ai/streamlit-app'}</span>
              </div>

              {/* Top Right Dashboard Quick Tabs */}
              <div className="preview-chrome-tabs">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`preview-tab-btn ${activeSlide === idx ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide(idx);
                    }}
                    title={`Switch to ${s.label}`}
                  >
                    {s.tag || `Dashboard ${idx + 1}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="spotlight-screen">
              <img
                key={activeSlide}
                src={slides[activeSlide]?.url || project.image}
                alt={`${project.title} - ${slides[activeSlide]?.label || ''}`}
                className="spotlight-screen-img"
              />

              {/* Floating Demo Video Quick Button on Screen */}
              <button
                type="button"
                className="spotlight-screen-video-btn"
                onClick={() => setShowVideoModal(true)}
                title="Play Demo Video"
              >
                <span className="screen-video-play-icon">
                  <FaPlay style={{ fontSize: '0.7rem', marginLeft: '2px' }} />
                </span>
                <span>Watch Live Demo</span>
              </button>

              {/* Slider Arrows */}
              <button
                type="button"
                className="spotlight-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous Dashboard Image"
                title="View Dashboard 1"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                className="spotlight-nav-btn next"
                onClick={handleNext}
                aria-label="Next Dashboard Image"
                title="View Dashboard 2"
              >
                <FiChevronRight />
              </button>

              {/* Bottom Info Overlay */}
              <div className="spotlight-screen-overlay">
                <span className="spotlight-live-badge">
                  <FiCheckCircle style={{ color: '#10b981', marginRight: '0.35rem' }} />
                  {slides[activeSlide]?.label || 'Streamlit Local Inference Live'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preprocessing & Metrics Modal */}
      {showModal && (
        <ProjectModal
          project={{
            ...project,
            image: '/images/retinaxplain.jpg'
          }}
          onClose={() => setShowModal(false)}
          onOpenVideo={() => {
            setShowModal(false);
            setShowVideoModal(true);
          }}
        />
      )}

      {/* Demo Video Popup Modal */}
      {showVideoModal && (
        <VideoModal
          videoId={project.videoId || 'MnS1vS5ZLqU'}
          onClose={() => setShowVideoModal(false)}
        />
      )}
    </section>
  );
}
