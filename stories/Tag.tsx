import React from 'react';
import './tag.css';

type TagProps = {
  children: React.ReactNode;
};

export const Tag = ({ children }: TagProps) => (
  <span className="tag">{children}</span>
);
