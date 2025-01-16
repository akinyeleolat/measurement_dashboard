// src/components/CanvasMeasurement.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Rectangle, MeasurementRecord } from '../types';
import { drawRectangles } from '../utils/canvasUtils';
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleSave,
  handleClear,
} from '../handlers/canvasHandlers';
import { DimensionsDisplay } from './DimensionsDisplay';

interface CanvasMeasurementProps {
  onSave: (record: MeasurementRecord) => void;
  selectedRecord?: MeasurementRecord;
}

const CanvasMeasurement: React.FC<CanvasMeasurementProps> = ({
  onSave,
  selectedRecord,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [tempRect, setTempRect] = useState<Rectangle | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (selectedRecord) {
      setRectangles(selectedRecord.rectangles);
      drawRectangles(canvasRef, selectedRecord.rectangles);
    }
  }, [selectedRecord]);

  useEffect(() => {
    drawRectangles(canvasRef, rectangles);
  }, [rectangles]);

  useEffect(() => {
    if (!tempRect) return;
    drawRectangles(canvasRef, [...rectangles, tempRect]);
  }, [tempRect, rectangles]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>Draw Rectangles on Canvas</h2>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{ border: '1px solid black' }}
        onMouseDown={(e) =>
          handleMouseDown({
            event: e,
            canvasRef,
            startPoint,
            setStartPoint,
            setIsDrawing,
            setTempRect,
            rectangles,
          })
        }
        onMouseMove={(e) =>
          handleMouseMove({
            event: e,
            canvasRef,
            startPoint,
            setTempRect,
            isDrawing,
            rectangles,
            setStartPoint,
            setIsDrawing,
          })
        }
        onMouseUp={() =>
          handleMouseUp({
            isDrawing,
            tempRect,
            setIsDrawing,
            setTempRect,
            setStartPoint,
            setRectangles,
          })
        }
      />
      <DimensionsDisplay rectangles={rectangles} />
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() =>
            handleSave({
              rectangles,
              onSave,
              setRectangles,
              drawRectangles: (rects) => drawRectangles(canvasRef, rects),
            })
          }
          disabled={rectangles.length !== 2}
          style={{ marginRight: '0.5rem' }}
        >
          Save
        </button>
        <button
          onClick={() =>
            handleClear({
              setRectangles,
              setTempRect,
              setIsDrawing,
              drawRectangles: (rects) => drawRectangles(canvasRef, rects),
            })
          }
        >
          Clear Canvas
        </button>
      </div>
    </div>
  );
};

export default CanvasMeasurement;