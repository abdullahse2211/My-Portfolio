import React, { useEffect } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

export default function VideoModal({ videoId = 'MnS1vS5ZLqU', onClose }) {
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

  return (
    <div className="modal-backdrop video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="video-modal-header">
          <div className="video-modal-info">
            <span className="video-modal-badge">
              <FaYoutube style={{ color: '#ff0000', marginRight: '0.4rem', fontSize: '1.1rem' }} />
              RetinaXplain Live Demo
            </span>
            <span className="video-modal-sub">Academic Capstone Video Walkthrough</span>
          </div>

          <div className="video-modal-actions">
            <a
              href={`https://youtu.be/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-modal-yt-link"
              title="Open on YouTube"
            >
              <FiExternalLink />
              <span>YouTube</span>
            </a>
            <button className="video-modal-close" onClick={onClose} aria-label="Close demo video">
              <FiX />
            </button>
          </div>
        </div>

        {/* Responsive Video Frame */}
        <div className="video-modal-iframe-wrapper">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="RetinaXplain Academic Project Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video-modal-iframe"
          />
        </div>
      </div>
    </div>
  );
}
