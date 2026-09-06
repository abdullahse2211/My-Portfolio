import React from 'react';
import useCountUp from '../../hooks/useCountUp';

export default function AnimatedCounter({ value, numericValue, suffix = '', label, decimals = 0 }) {
  const num = numericValue !== undefined && numericValue !== null ? numericValue : parseFloat(value) || 0;
  const [ref, count] = useCountUp(num, 2000, decimals);

  return (
    <div ref={ref} className="counter-item">
      <span className="counter-value">
        {count}
        {suffix}
      </span>
      {label && <span className="counter-label">{label}</span>}
    </div>
  );
}
