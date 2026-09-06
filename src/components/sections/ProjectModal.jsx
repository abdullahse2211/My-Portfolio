import React, { useEffect } from 'react';
import { FiX, FiCheckCircle, FiBookOpen } from 'react-icons/fi';
import AnimatedCounter from '../common/AnimatedCounter';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <img
          src={project.image || '/images/retinaxplain.jpg'}
          alt={project.title}
          className="modal-image"
          onError={(e) => {
            e.target.src = '/images/retinaxplain.jpg';
          }}
        />

        <div className="modal-body">
          <div className="modal-header">
            <div>
              <span className="project-role" style={{ fontSize: '0.85rem' }}>
                {project.role}
              </span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>{project.title}</h2>
              <span className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>
                Category: {project.category}
              </span>
            </div>
          </div>

          <p className="modal-scope">{project.scope}</p>

          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                // BENCHMARK METRICS
              </h4>
              <div className="modal-metrics">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="modal-metric">
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

          {project.publicationStatus && (
            <div className="modal-publication">
              <FiBookOpen style={{ marginRight: '0.5rem' }} />
              <strong>Publication:</strong> {project.publicationStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
