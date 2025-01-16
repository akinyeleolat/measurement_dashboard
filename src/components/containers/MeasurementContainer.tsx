import React from 'react';
import CanvasMeasurement from '../CanvasMeasurement';
import { useRecords } from '../../hooks/useRecords';
import RecordsTable from '../RecordsTable';


export const MeasurementContainer: React.FC = () => {
  const { records, selectedRecord, saveRecord, selectRecord } = useRecords();

  return (
    <>
      <CanvasMeasurement 
        onSave={saveRecord} 
        selectedRecord={selectedRecord} 
      />
      <RecordsTable
        records={records}
        onSelect={selectRecord}
        selectedRecordId={selectedRecord?.id}
      />
    </>
  );
};