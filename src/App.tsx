import React, { useState, useEffect } from 'react';
import CanvasMeasurement from './components/CanvasMeasurement';
import RecordsTable from './components/RecordsTable';
import { MeasurementRecord } from './types';

const LOCAL_STORAGE_KEY = 'myMeasurementRecords';

const App: React.FC = () => {
  const [records, setRecords] = useState<MeasurementRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<MeasurementRecord | undefined>(
    undefined
  );

  // Fetch data from local storage on mount
  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setRecords(JSON.parse(storedData));
    }
  }, []);

  /**
   * Save a new record:
   * 1. Update state
   * 2. Push to local storage
   */
  const handleSave = (newRecord: MeasurementRecord) => {
    const newRecords = [...records, newRecord];
    setRecords(newRecords);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecords));
    setSelectedRecord(undefined); // Clear any selection
  };

  /**
   * When user clicks a table row, select that record for re-drawing
   */
  const handleSelectRecord = (record: MeasurementRecord) => {
    setSelectedRecord(record);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem' }}>
      <h1>Interactive Measurement Dashboard</h1>
      <CanvasMeasurement onSave={handleSave} selectedRecord={selectedRecord} />
      <RecordsTable
        records={records}
        onSelect={handleSelectRecord}
        selectedRecordId={selectedRecord?.id}
      />
    </div>
  );
};

export default App;
