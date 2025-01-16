import React from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { MeasurementContainer } from './components/containers/MeasurementContainer';


const App: React.FC = () => {
  return (
    <DashboardLayout>
      <MeasurementContainer />
    </DashboardLayout>
  );
};

export default App;