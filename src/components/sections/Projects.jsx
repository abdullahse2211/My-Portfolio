import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ProjectModal from './ProjectModal';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiCpu, FiCheckCircle } from 'react-icons/fi';

export default function Projects({ projects = [] }) {
  const [showModal, setShowModal] = useState(false);
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
    metrics: [
      { label: 'Validation Accuracy', value: '85.27%' },
      { label: 'Macro-F1 Score', value: '0.7216' },
      { label: 'Training Samples', value: '~16,000' },
      { label: 'Models Ensembled', value: '3' }
    ],
    image: '/images/projects/retinaxplain.jpg',
    fallbackImage: '/images/retinaxplain.png'
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label=""
          title="Featured Project"
          subtitle="SOTA explainable medical computer vision framework shipped with full inference frontend."
          className="text-center"
        />

        <div ref={revealRef} className="project-spotlight-wrapper reveal">
          {/* Left Column: Project Details & Metrics */}
          <div className="project-spotlight-details">
            <div className="project-spotlight-header">
              <span className="spotlight-role-badge">
                <FiCpu style={{ marginRight: '0.4rem' }} /> {project.role}
              </span>
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

            {/* GitHub & Inspect Actions */}
            <div className="spotlight-actions">
              <a
                href={project.githubUrl || 'https://github.com/abdullahse2211'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" icon={FiGithub}>
                  View on GitHub <FiExternalLink style={{ marginLeft: '0.2rem' }} />
                </Button>
              </a>

              <Button variant="outline" onClick={() => setShowModal(true)}>
                Inspect Preprocessing & Loss Metrics
              </Button>
            </div>
          </div>

          {/* Right Column: Desktop Mockup Frame */}
          <div className="project-spotlight-frame">
            <div className="preview-browser-chrome">
              <div className="preview-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="preview-url-bar">
                <span>retinaxplain.ai / streamlit-app</span>
              </div>
            </div>

            <div className="spotlight-screen">
              <img
                src={project.image}
                alt={project.title}
                className="spotlight-screen-img"
                onError={(e) => {
                  e.target.src = project.fallbackImage || '/images/retinaxplain.png';
                }}
              />
              <div className="spotlight-screen-overlay">
                <span className="spotlight-live-badge">
                  <FiCheckCircle style={{ color: '#10b981', marginRight: '0.35rem' }} />
                  Streamlit Local Inference Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ProjectModal
          project={project}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
