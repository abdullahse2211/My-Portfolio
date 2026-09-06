import React from 'react';
import SectionHeader from '../common/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiCpu, FiLayers, FiDatabase, FiAward } from 'react-icons/fi';

export default function TechStack({ profile }) {
  const revealRef = useScrollReveal();

  const categories = [
    {
      title: 'Core AI & Frameworks (ML & DL)',
      tag: 'ML & DEEP LEARNING',
      icon: FiCpu,
      color: '#06b6d4',
      skills: [
        'PyTorch',
        'TensorFlow',
        'scikit-Learn',
        'Hugging Face Transformers',
        'OpenCV (Image Processing)',
        'Jupyter Notebook',
        'Overleaf'
      ]
    },
    {
      title: 'Generative AI & Advanced ML',
      tag: 'GEN-AI & OPTIMIZATION',
      icon: FiLayers,
      color: '#a855f7',
      skills: [
        'Diffusion Models (DDPM, DDIM)',
        'RAG (Retrieval-Augmented Generation)',
        'Bayesian Optimization (BoTorch)',
        'Knowledge Distillation',
        'Qwen2-VL',
        'LlamaIndex',
        'GraphRAG',
        'vLLM',
        'TensorRT',
        '4-bit AWQ',
        'Neo4j',
        'LoRA'
      ]
    },
    {
      title: 'Data Analytics & Programming',
      tag: 'DATA SCIENCE & DEV',
      icon: FiDatabase,
      color: '#3b82f6',
      skills: [
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Streamlit',
        'Python',
        'JavaScript (ES6+)',
        'SQL (MySQL)',
        'HTML5',
        'CSS3',
        'MERN Stack (React, Node.js, Express.js, MongoDB)'
      ]
    },
    {
      title: 'Professional & Soft Skills',
      tag: 'CORE COMPETENCIES',
      icon: FiAward,
      color: '#10b981',
      skills: [
        'Git / GitHub Version Control',
        'MLOps',
        'Time Series Forecasting',
        'Technical Problem Solving',
        'Analytical Thinking',
        'Teamwork & Collaboration',
        'Research & Report Writing'
      ]
    }
  ];

  return (
    <section id="techstack" className="section">
      <div className="container">
        <SectionHeader
          label=""
          title="My Skills"
          subtitle="Core machine learning frameworks, generative AI architectures, full-stack programming, and professional engineering competencies."
          className="text-center"
        />

        <div ref={revealRef} className="skills-bento-grid reveal">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="skills-bento-card">
                <div className="skills-card-header">
                  <div className="skills-icon-badge" style={{ borderColor: cat.color }}>
                    <Icon style={{ color: cat.color }} />
                  </div>
                  <div>
                    <span className="skills-category-tag" style={{ color: cat.color }}>
                      {cat.tag}
                    </span>
                    <h3>{cat.title}</h3>
                  </div>
                </div>

                <div className="skills-chips-wrapper">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="glass-tech-chip">
                      <span className="chip-dot" style={{ background: cat.color }}></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


