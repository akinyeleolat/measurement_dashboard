import React from 'react';
import { RecordsTableProps } from '../types';

const RecordsTable: React.FC<RecordsTableProps> = ({
  records,
  onSelect,
  selectedRecordId,
}) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h2>Saved Measurements</h2>
      {records.length === 0 ? (
        <p>No records found</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Rect1 (W x H)</th>
              <th>Rect2 (W x H)</th>
              <th>Distance</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              const [r1, r2] = record.rectangles;
              return (
                <tr
                  key={record.id}
                  onClick={() => onSelect(record)}
                  style={{
                    backgroundColor:
                      record.id === selectedRecordId ? '#ccf' : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <td>{`${Math.abs(r1.width)} x ${Math.abs(r1.height)}`}</td>
                  <td>{`${Math.abs(r2.width)} x ${Math.abs(r2.height)}`}</td>
                  <td>{record.distance}</td>
                  <td>{new Date(record.createdAt).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecordsTable;
