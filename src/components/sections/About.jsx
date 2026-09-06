import React from 'react';
import SectionHeader from '../common/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function About({ profile }) {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-layout">
          <SectionHeader
            label=""
            title="About me"
            subtitle="AI/ML Engineer & Full-Stack Developer specializing in Medical Computer Vision and Deep Learning pipelines."
            className="text-center"
          />

          <div ref={revealRef} className="about-terminal reveal">
            {/* Mac-style Terminal Chrome */}
            <div className="terminal-chrome">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">abdullah@portfolio — bash</span>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">✦</span>
                <span className="terminal-greeting">Hi</span>
              </div>

              <div className="terminal-content">
                <p>
                  {profile?.aboutText ||
                    'Software Engineering Graduate from Lahore Garrison University (2022–2026) specializing in Medical Computer Vision, Deep Learning, and end-to-end PyTorch pipelines. I build explainable hybrid CNN-Transformer frameworks, compress production models via Knowledge Distillation (6.4× compression with zero quality loss), and deploy full-stack inference systems backed by quantitative benchmarks.'}
                </p>

                <div className="terminal-stats">
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">University</span>
                    <span className="terminal-stat-value">{profile?.education?.university || 'Lahore Garrison University'}</span>
                  </div>
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">Degree</span>
                    <span className="terminal-stat-value">{profile?.education?.degree || 'BS SE (Software Engineering)'}</span>
                  </div>
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">Duration</span>
                    <span className="terminal-stat-value">{profile?.education?.years || '2022 – 2026'}</span>
                  </div>
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">Focus</span>
                    <span className="terminal-stat-value">Medical CV, Deep Learning, PyTorch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
