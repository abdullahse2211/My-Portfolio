import React from 'react';

export default function Badge({ text, icon: Icon, className = '' }) {
  return (
    <span className={`badge ${className}`}>
      {Icon && <Icon style={{ fontSize: '0.85rem' }} />}
      <span>{text}</span>
    </span>
  );
}
