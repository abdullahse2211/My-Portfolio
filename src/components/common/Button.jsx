import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon
}) {
  const btnClass = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${disabled ? 'btn-loading' : ''} ${className}`;

  return (
    <button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
}
