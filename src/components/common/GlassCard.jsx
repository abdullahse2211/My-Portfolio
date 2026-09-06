import React from 'react';

export default function GlassCard({ children, className = '', hover = true, style = {}, onClick }) {
  return (
    <div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}
      style={{
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid var(--border-glass)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        transition: 'all var(--transition-base)',
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
