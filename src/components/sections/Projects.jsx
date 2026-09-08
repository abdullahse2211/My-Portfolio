import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ProjectModal from './ProjectModal';
import VideoModal from './VideoModal';
import ImageLightboxModal from '../common/ImageLightboxModal';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiCpu, FiCheckCircle, FiChevronLeft, FiChevronRight, FiCalendar, FiLayers, FiMaximize2 } from 'react-icons/fi';
import { FaYoutube, FaPlay } from 'react-icons/fa';

function ProjectSpotlightCard({ project, onOpenModal, onOpenVideo, onOpenLightbox }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = project.images || [
    {
      url: project.image || '/Dashboard.png',
      label: project.title,
      tag: 'Overview',
      path: `${project.id || 'project'}.ai/app`
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
    <div className="project-spotlight-wrapper" style={{ marginBottom: '3.5rem' }}>
      {/* Left Column: Details, Metrics, and Actions */}
      <div className="project-spotlight-details">
        <div className="project-spotlight-header">
          <div className="spotlight-badge-row">
            <span className="spotlight-role-badge">
              <FiCpu style={{ marginRight: '0.4rem' }} /> {project.role}
            </span>
            {project.duration && (
              <span className="spotlight-academic-badge">
                <FiCalendar style={{ marginRight: '0.35rem' }} />
                {project.duration}
              </span>
            )}
          </div>
          <h3 className="spotlight-title">{project.title}</h3>
          <p className="spotlight-subtitle">{project.subtitle}</p>
        </div>

        <p className="spotlight-description">{project.description}</p>

        {project.features && (
          <div className="spotlight-features-box">
            <span className="features-box-label">ARCHITECTURE & DEPLOYMENT</span>
            <p>{project.features}</p>
          </div>
        )}

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

        {/* Actions */}
        <div className="spotlight-actions">
          {project.videoUrl && (
            <button
              type="button"
              className="btn-demo-video-pulse"
              onClick={() => onOpenVideo(project.videoId || 'MnS1vS5ZLqU')}
              aria-label="Watch Demo Video"
            >
              <span className="demo-video-icon-wrap">
                <FaPlay style={{ fontSize: '0.75rem', marginLeft: '1px' }} />
              </span>
              <span>Watch Demo Video</span>
              <span className="demo-video-yt-tag"><FaYoutube /></span>
            </button>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" icon={FiGithub}>
                GitHub <FiExternalLink style={{ marginLeft: '0.2rem' }} />
              </Button>
            </a>
          )}

          <Button variant="outline" onClick={() => onOpenModal(project)}>
            Inspect Architecture & Metrics
          </Button>

          <Button
            variant="outline"
            className="btn-expand-gallery"
            onClick={() => onOpenLightbox(slides, activeSlide, project.title)}
          >
            <FiMaximize2 style={{ marginRight: '0.35rem' }} /> View Full Images ({slides.length})
          </Button>
        </div>
      </div>

      {/* Right Column: Desktop Mockup Frame with Interactive Slides */}
      <div className="project-spotlight-frame">
        <div className="preview-browser-chrome">
          <div className="preview-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>

          <div className="preview-url-bar">
            <span>{slides[activeSlide]?.path || `${project.id || 'research'}.ai/live-demo`}</span>
          </div>

          {/* Top Right Quick Tabs */}
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
                {s.tag || `View ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>

        <div
          className="spotlight-screen spotlight-screen-clickable"
          onClick={() => onOpenLightbox(slides, activeSlide, project.title)}
          title="Click to view fullscreen high-resolution image"
        >
          <img
            key={activeSlide}
            src={slides[activeSlide]?.url || project.image}
            alt={`${project.title} - ${slides[activeSlide]?.label || ''}`}
            className="spotlight-screen-img spotlight-screen-contain"
          />

          {/* Floating Expand Hint */}
          <div className="spotlight-expand-hint">
            <FiMaximize2 />
            <span>Click to Expand</span>
          </div>

          {/* Floating Demo Video Quick Button on Screen if video exists */}
          {project.videoUrl && (
            <button
              type="button"
              className="spotlight-screen-video-btn"
              onClick={(e) => {
                e.stopPropagation();
                onOpenVideo(project.videoId || 'MnS1vS5ZLqU');
              }}
              title="Play Demo Video"
            >
              <span className="screen-video-play-icon">
                <FaPlay style={{ fontSize: '0.7rem', marginLeft: '2px' }} />
              </span>
              <span>Watch Live Demo</span>
            </button>
          )}

          {/* Slider Arrows */}
          <button
            type="button"
            className="spotlight-nav-btn prev"
            onClick={handlePrev}
            aria-label="Previous Image"
            title="Previous Screen"
          >
            <FiChevronLeft />
          </button>

          <button
            type="button"
            className="spotlight-nav-btn next"
            onClick={handleNext}
            aria-label="Next Image"
            title="Next Screen"
          >
            <FiChevronRight />
          </button>

          {/* Bottom Info Overlay */}
          <div className="spotlight-screen-overlay">
            <span className="spotlight-live-badge">
              <FiCheckCircle style={{ color: '#10b981', marginRight: '0.35rem' }} />
              {slides[activeSlide]?.label || 'Deep Learning Inference Engine'}
            </span>
            <span className="spotlight-slide-count-badge">
              {activeSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects = [] }) {
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [lightboxState, setLightboxState] = useState(null); // { images, initialIndex, title }
  const revealRef = useScrollReveal();

  const spotlightProjects = projects.filter((p) => p.featured || p.id === 'retinaxplain' || p.id === 'bionafnet');
  const cardProjects = projects.filter((p) => !spotlightProjects.some((sp) => sp.id === p.id));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          title="Academic & AI Lab Research Projects"
          subtitle="From explainable Vision Transformer diagnostic frameworks to bio-inspired low-light enhancement and clinical machine learning."
          className="text-center"
        />

        <div ref={revealRef} className="reveal">
          {/* Spotlight Projects (RetinaXplain & BioNAFNet) */}
          {spotlightProjects.map((p) => (
            <ProjectSpotlightCard
              key={p.id}
              project={p}
              onOpenModal={(proj) => setSelectedModalProject(proj)}
              onOpenVideo={(vId) => setActiveVideoId(vId)}
              onOpenLightbox={(imgs, idx, title) => setLightboxState({ images: imgs, initialIndex: idx, title })}
            />
          ))}

          {/* Centered Research Project: ThalCare (No Image, Centered Layout) */}
          {cardProjects.length > 0 && (
            <div className="research-projects-section">
              <div className="research-section-header">
                <span className="research-section-badge">AI LAB BENCHMARKS & RESEARCH</span>
                <h3 className="research-section-title">Clinical Machine Learning & Diagnostic Systems</h3>
              </div>

              <div className="research-single-centered-container">
                {cardProjects.map((p) => (
                  <div key={p.id} className="research-project-card-centered">
                    <div className="research-card-body-centered">
                      <div className="research-card-meta-centered">
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
                        <span className="research-category-badge-inline">{p.category}</span>
                      </div>

                      <h4 className="research-card-title-centered">{p.title}</h4>

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
                        <div className="research-metrics-centered-grid">
                          {p.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="research-metric-mini-card">
                              <span className="research-metric-mini-val">{m.value}</span>
                              <span className="research-metric-mini-lbl">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="research-tech-tags-centered">
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
      {selectedModalProject && (
        <ProjectModal
          project={{
            ...selectedModalProject,
            image: selectedModalProject.id === 'retinaxplain' ? '/images/retinaxplain.jpg' : selectedModalProject.image
          }}
          onClose={() => setSelectedModalProject(null)}
          onOpenVideo={
            selectedModalProject.videoId
              ? () => {
                  const vId = selectedModalProject.videoId;
                  setSelectedModalProject(null);
                  setActiveVideoId(vId);
                }
              : null
          }
        />
      )}

      {/* Fullscreen Multi-Image Lightbox Modal */}
      {lightboxState && (
        <ImageLightboxModal
          images={lightboxState.images}
          initialIndex={lightboxState.initialIndex}
          title={lightboxState.title}
          onClose={() => setLightboxState(null)}
        />
      )}

      {/* Demo Video Popup Modal */}
      {activeVideoId && (
        <VideoModal
          videoId={activeVideoId}
          onClose={() => setActiveVideoId(null)}
        />
      )}
    </section>
  );
}
