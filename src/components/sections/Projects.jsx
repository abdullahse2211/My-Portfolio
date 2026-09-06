import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ProjectModal from './ProjectModal';
import VideoModal from './VideoModal';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiCpu, FiCheckCircle, FiChevronLeft, FiChevronRight, FiCalendar, FiLayers } from 'react-icons/fi';
import { FaYoutube, FaPlay } from 'react-icons/fa';

export default function Projects({ projects = [] }) {
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const revealRef = useScrollReveal();

  const featuredProject = projects[0] || {
    title: 'RetinaXplain',
    subtitle: 'Hybrid CNN-Vision Transformer Framework for Diabetic Retinopathy Classification',
    role: 'Final Year Project — Sole AI Researcher and Developer',
    duration: '01/01/2026 – 22/05/2026',
    description:
      'Processed 3,662 APTOS images across 5 DR classes using circular cropping and Ben Graham normalization, expanding data to ~16,000 augmented instances. Trained and evaluated Swin-T (85.27% accuracy, 0.7216 macro-F1), EfficientNet-B3, and ViT-B/16, engineering weighted soft-voting ensembles, clinical label remap, and agreement analysis.',
    features:
      'Built a multi-page web app featuring real-time DR diagnostic reports, probability visualizers, session analytics, and downloadable JSON records; authored a 72-page technical report.',
    techTags: ['PyTorch', 'Swin Transformer', 'ViT-B/16', 'EfficientNet-B3', 'Streamlit', 'OpenCV', 'Computer Vision'],
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

  const otherProjects = projects.slice(1);

  const slides = featuredProject.images || [
    {
      url: featuredProject.image || '/Dashboard1.jpg',
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
          title="Academic & AI Lab Research Projects"
          subtitle="From explainable Vision Transformer diagnostic frameworks to bio-inspired low-light enhancement and clinical machine learning."
          className="text-center"
        />

        <div ref={revealRef} className="reveal">
          {/* ══ Featured Spotlight: RetinaXplain ══ */}
          <div className="project-spotlight-wrapper">
            {/* Left Column: Project Details & Metrics */}
            <div className="project-spotlight-details">
              <div className="project-spotlight-header">
                <div className="spotlight-badge-row">
                  <span className="spotlight-role-badge">
                    <FiCpu style={{ marginRight: '0.4rem' }} /> {featuredProject.role}
                  </span>
                  {featuredProject.duration && (
                    <span className="spotlight-academic-badge">
                      <FiCalendar style={{ marginRight: '0.35rem' }} />
                      {featuredProject.duration}
                    </span>
                  )}
                </div>
                <h3 className="spotlight-title">{featuredProject.title}</h3>
                <p className="spotlight-subtitle">{featuredProject.subtitle}</p>
              </div>

              <p className="spotlight-description">{featuredProject.description}</p>

              <div className="spotlight-features-box">
                <span className="features-box-label">ARCHITECTURE & DEPLOYMENT</span>
                <p>{featuredProject.features}</p>
              </div>

              {/* Benchmark Metrics Grid */}
              <div className="spotlight-metrics-grid">
                {featuredProject.metrics?.map((m, idx) => (
                  <div key={idx} className="spotlight-metric-card">
                    <span className="spotlight-metric-value">{m.value}</span>
                    <span className="spotlight-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="spotlight-tags-container">
                {featuredProject.techTags?.map((tag, tIdx) => (
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
                  href={featuredProject.githubUrl || 'https://github.com/abdullahse2211'}
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
                  src={slides[activeSlide]?.url || featuredProject.image}
                  alt={`${featuredProject.title} - ${slides[activeSlide]?.label || ''}`}
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

          {/* ══ Other Academic & AI Lab Research Projects ══ */}
          {otherProjects.length > 0 && (
            <div className="research-projects-section">
              <div className="research-section-header">
                <span className="research-section-badge">AI LAB BENCHMARKS & RESEARCH</span>
                <h3 className="research-section-title">Deep Learning & Clinical Machine Learning Projects</h3>
              </div>

              <div className="research-projects-grid">
                {otherProjects.map((p) => (
                  <div key={p.id} className="research-project-card">
                    <div className="research-card-img-wrap">
                      <img src={p.image} alt={p.title} className="research-card-img" />
                      <div className="research-card-overlay-gradient"></div>
                      <span className="research-category-badge">{p.category}</span>
                    </div>

                    <div className="research-card-body">
                      <div className="research-card-meta">
                        <span className="research-role-tag">
                          <FiCpu style={{ marginRight: '0.35rem', color: 'var(--accent-primary)' }} />
                          {p.role}
                        </span>
                        {p.duration && (
                          <span className="research-duration-tag">
                            <FiCalendar style={{ marginRight: '0.35rem', color: 'var(--accent-secondary)' }} />
                            {p.duration}
                          </span>
                        )}
                      </div>

                      <h4 className="research-card-title">{p.title}</h4>

                      <div className="research-contributions-list">
                        {p.contributions?.map((c, cIdx) => (
                          <div key={cIdx} className="research-contribution-item">
                            <span className="research-bullet-dot"></span>
                            <p>
                              <strong>{c.title}:</strong> {c.text}
                              {c.metric && <span className="metric-pill-highlight">{c.metric}</span>}
                              {c.textMid && c.textMid}
                              {c.metric2 && <span className="metric-pill-highlight">{c.metric2}</span>}
                              {c.textEnd && c.textEnd}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Key Benchmark Metrics Row */}
                      {p.metrics && p.metrics.length > 0 && (
                        <div className="research-metrics-mini-grid">
                          {p.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="research-metric-mini-card">
                              <span className="research-metric-mini-val">{m.value}</span>
                              <span className="research-metric-mini-lbl">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="research-tech-tags">
                        {p.techTags?.map((tag, tIdx) => (
                          <Badge key={tIdx} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Preprocessing & Metrics Modal */}
      {showModal && (
        <ProjectModal
          project={{
            ...featuredProject,
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
          videoId={featuredProject.videoId || 'MnS1vS5ZLqU'}
          onClose={() => setShowVideoModal(false)}
        />
      )}
    </section>
  );
}
