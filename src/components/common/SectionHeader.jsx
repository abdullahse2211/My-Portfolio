import React from 'react';

export default function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`section-header ${className}`}>
      {label && <span className="section-label">{label}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
