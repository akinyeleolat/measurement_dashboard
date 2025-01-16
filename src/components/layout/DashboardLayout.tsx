import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem' }}>
      <h1>Interactive Measurement Dashboard</h1>
      {children}
    </div>
  );
};