// src/hooks/useRecords.ts
import { useState, useEffect } from 'react';
import { MeasurementRecord } from '../types';

const LOCAL_STORAGE_KEY = 'myMeasurementRecords';

export const useRecords = () => {
  const [records, setRecords] = useState<MeasurementRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<MeasurementRecord | undefined>(
    undefined
  );

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setRecords(JSON.parse(storedData));
    }
  }, []);

  const saveRecord = (newRecord: MeasurementRecord) => {
    const newRecords = [...records, newRecord];
    setRecords(newRecords);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecords));
    setSelectedRecord(undefined);
  };

  const selectRecord = (record: MeasurementRecord) => {
    setSelectedRecord(record);
  };

  return {
    records,
    selectedRecord,
    saveRecord,
    selectRecord
  };
};