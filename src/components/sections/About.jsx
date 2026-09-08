import React from 'react';
import SectionHeader from '../common/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function About({ profile }) {
  const revealRef = useScrollReveal();

  const aboutDescription =
    profile?.aboutText ||
    'I am a Software Engineering graduate and AI/ML Engineer specializing in Computer Vision, Deep Learning, and production-grade Generative AI pipelines. I bridge the gap between academic research and real-world engineering—building everything from medical image diagnostics to enterprise Agentic GraphRAG architectures. With hands-on experience in model acceleration (vLLM, TensorRT, 4-bit AWQ) and full-stack microservice deployment (FastAPI, Docker, Streamlit), I focus on engineering scalable, high-throughput, and production-ready AI systems.';

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-layout">
          <SectionHeader
            title="About Me"
            subtitle="Bridging the gap between academic research and production-grade AI engineering."
            className="text-center"
          />

          <div ref={revealRef} className="about-terminal reveal">
            {/* Terminal Chrome Bar */}
            <div className="terminal-chrome">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">abdullah@portfolio — bio.sh</span>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <div className="terminal-content">
                <p className="terminal-bio-paragraph">
                  {aboutDescription}
                </p>

                <div className="terminal-stats">
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">University</span>
                    <span className="terminal-stat-value">{profile?.education?.university || 'Lahore Garrison University'}</span>
                  </div>
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">Degree</span>
                    <span className="terminal-stat-value">{profile?.education?.degree || 'BS Software Engineering'}</span>
                  </div>
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">Duration</span>
                    <span className="terminal-stat-value">{profile?.education?.years || '2022 – 2026'}</span>
                  </div>
                  <div className="terminal-stat">
                    <span className="terminal-stat-label">Focus</span>
                    <span className="terminal-stat-value">{profile?.education?.focus || 'Artificial Intelligence, Robotics & Deep Learning'}</span>
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
