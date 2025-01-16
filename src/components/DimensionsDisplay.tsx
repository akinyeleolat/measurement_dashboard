// src/components/DimensionsDisplay.tsx
import React from 'react';
import { Rectangle } from '../types';

interface DimensionsDisplayProps {
  rectangles: Rectangle[];
}

export const DimensionsDisplay: React.FC<DimensionsDisplayProps> = ({ rectangles }) => {
  const rect1 = rectangles[0];
  const rect2 = rectangles[1];
  
  const dimension1 = rect1
    ? `(width: ${Math.abs(rect1.width)}, height: ${Math.abs(rect1.height)})`
    : '-';
  const dimension2 = rect2
    ? `(width: ${Math.abs(rect2.width)}, height: ${Math.abs(rect2.height)})`
    : '-';

  return (
    <div style={{ marginTop: '1rem' }}>
      <div>Rectangle 1: {dimension1}</div>
      <div>Rectangle 2: {dimension2}</div>
    </div>
  );
};