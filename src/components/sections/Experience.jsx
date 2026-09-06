import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiZap, FiCpu, FiClock } from 'react-icons/fi';

export default function Experience({ experiences = [] }) {
  const revealRef = useScrollReveal();

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          title="Industry & Engineering Experience"
          subtitle="Building sovereign AI infrastructure, Agentic GraphRAG, and production vision-language models."
        />

        <div ref={revealRef} className="timeline-wrapper reveal">
          {experiences.map((exp) => (
            <div key={exp.id || exp.company} className="timeline-item">
              {/* Timeline Node Icon */}
              <div className="timeline-node">
                <div className="timeline-node-inner">
                  <FiCpu />
                </div>
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-role-title">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <span className="experience-company-badge">{exp.company}</span>
                      <span className="experience-type-badge">
                        <FiClock style={{ marginRight: '0.3rem', fontSize: '0.75rem' }} />
                        {exp.employmentType || 'Part-Time (30 hrs/week)'}
                      </span>
                    </div>
                    <h3 className="experience-role">{exp.role}</h3>
                  </div>
                  <div className="experience-meta">
                    <span className="meta-item">
                      <FiCalendar style={{ marginRight: '0.35rem', color: 'var(--accent-primary)' }} />
                      {exp.duration}
                    </span>
                    <span className="meta-item">
                      <FiMapPin style={{ marginRight: '0.35rem', color: 'var(--accent-secondary)' }} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Contributions & Impact Bullet Points */}
                <div className="experience-body">
                  <h4 className="experience-subtitle">KEY IMPACT & TECHNICAL CONTRIBUTIONS</h4>
                  <ul className="experience-impact-list">
                    {exp.contributions?.map((item, idx) => (
                      <li key={idx} className="experience-impact-item">
                        <span className="impact-bullet-icon">
                          <FiCheckCircle />
                        </span>
                        <div className="impact-text-wrapper">
                          <strong>{item.title}:</strong> {item.text}
                          {item.metric && <span className="metric-pill-highlight">{item.metric}</span>}
                          {item.textMid && item.textMid}
                          {item.metric2 && <span className="metric-pill-highlight">{item.metric2}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Core Tech Stack Micro-Badges */}
                  <div className="experience-tech-section">
                    <span className="tech-section-label">CORE TECH STACK</span>
                    <div className="experience-tech-tags">
                      {exp.techStack?.map((tag, tIdx) => (
                        <Badge key={tIdx} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
