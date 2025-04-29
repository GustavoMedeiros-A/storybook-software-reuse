import React from 'react';
import './badge.css';

interface BadgeProps {
  label: string;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ label, color = 'primary' }) => {
  return <span className={`badge badge--${color}`}>{label}</span>;
};