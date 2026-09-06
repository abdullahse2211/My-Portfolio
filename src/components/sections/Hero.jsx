import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { FiArrowRight, FiDownload, FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero({ profile }) {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = profile?.taglines?.length
    ? profile.taglines
    : [
        'AI/ML Engineer',
        'Computer Vision Engineer',
        'Deep Learning Engineer',
        'AI Research Assistant'
      ];

  useEffect(() => {
    const currentFullText = taglines[typewriterIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
      }, 90);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTypewriterIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typewriterIndex, taglines]);

  return (
    <section id="hero" className="hero">
      {/* Background Mesh Gradient Glowing Blobs */}
      <div className="hero-mesh-blobs" aria-hidden="true">
        <div className="mesh-blob blob-purple"></div>
        <div className="mesh-blob blob-cyan"></div>
        <div className="mesh-blob blob-violet"></div>
      </div>

      {/* Neural Network Background Art */}
      <div className="hero-bg-art" aria-hidden="true">
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="hero-neural-svg">
          {/* Neural network nodes and connections */}
          <g stroke="rgba(6,182,212,0.2)" strokeWidth="1" fill="none">
            <line x1="100" y1="100" x2="250" y2="200" />
            <line x1="100" y1="300" x2="250" y2="200" />
            <line x1="100" y1="500" x2="250" y2="400" />
            <line x1="250" y1="200" x2="400" y2="150" />
            <line x1="250" y1="200" x2="400" y2="300" />
            <line x1="250" y1="400" x2="400" y2="300" />
            <line x1="250" y1="400" x2="400" y2="450" />
            <line x1="400" y1="150" x2="550" y2="250" />
            <line x1="400" y1="300" x2="550" y2="250" />
            <line x1="400" y1="300" x2="550" y2="400" />
            <line x1="400" y1="450" x2="550" y2="400" />
            <line x1="550" y1="250" x2="700" y2="300" />
            <line x1="550" y1="400" x2="700" y2="300" />
          </g>
          <g fill="rgba(6,182,212,0.25)">
            <circle cx="100" cy="100" r="4" />
            <circle cx="100" cy="300" r="4" />
            <circle cx="100" cy="500" r="4" />
            <circle cx="250" cy="200" r="5" />
            <circle cx="250" cy="400" r="5" />
            <circle cx="400" cy="150" r="5" />
            <circle cx="400" cy="300" r="6" />
            <circle cx="400" cy="450" r="5" />
            <circle cx="550" cy="250" r="5" />
            <circle cx="550" cy="400" r="5" />
            <circle cx="700" cy="300" r="6" />
          </g>
          {/* Floating dots */}
          <g fill="rgba(168,85,247,0.15)">
            <circle cx="50" cy="50" r="2"><animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite" /></circle>
            <circle cx="750" cy="80" r="2"><animate attributeName="cy" values="80;72;80" dur="4s" repeatCount="indefinite" /></circle>
            <circle cx="650" cy="500" r="3"><animate attributeName="cy" values="500;490;500" dur="3.5s" repeatCount="indefinite" /></circle>
            <circle cx="200" cy="520" r="2"><animate attributeName="cy" values="520;512;520" dur="4.5s" repeatCount="indefinite" /></circle>
          </g>
        </svg>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left: Text Content */}
          <div className="hero-text">
            <span className="hero-greeting">Hi, I am</span>
            <h1 className="hero-name">

              <span className="hero-name-glow">{profile?.name || 'Muhammad Abdullah'}</span>

            </h1>

            <div className="hero-title-wrapper">
              <span className="hero-typewriter">{displayText}</span>
              <span className="hero-cursor">|</span>
            </div>

            <p className="hero-description">
              AI/ML Engineer specializing in <strong>Computer Vision</strong>, <strong>Deep Learning</strong>, and production-grade <strong>Generative AI pipelines</strong> backed by scalable full-stack deployment capability.
            </p>

            <div className="hero-buttons">
              <a href={profile?.resumeUrl || '/M.Abdullah Ultimate.pdf'} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={FiDownload}>
                  Download CV
                </Button>
              </a>
              <a href={profile?.socialLinks?.github || 'https://github.com/abdullahse2211'} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" icon={FiGithub}>
                  GitHub
                </Button>
              </a>
              <a href={profile?.socialLinks?.linkedin || 'https://linkedin.com/in/muhammad-abdullah2211'} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" icon={FiLinkedin}>
                  LinkedIn
                </Button>
              </a>
              <a href={`mailto:${profile?.email || 'abdullahse2211@gmail.com'}`}>
                <Button variant="outline" icon={FiMail}>
                  Email Me
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Pop-Out 3D Avatar Frame */}
          <div className="hero-avatar-container">
            <div className="hero-splat-bg"></div>
            <div className="hero-popout-card">
              <div className="hero-circle-ring">
                <div className="hero-circle-inner-bg"></div>
              </div>
              <img
                src={profile?.cutoutUrl || '/bg-rmv.png'}
                alt="Muhammad Abdullah"
                className="hero-avatar-cutout"
                onError={(e) => {
                  e.target.src = profile?.avatarUrl || '/profile-pic.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down">
        <span>SCROLL</span>
        <FiChevronDown style={{ fontSize: '1.2rem' }} />
      </a>
    </section>
  );
}
