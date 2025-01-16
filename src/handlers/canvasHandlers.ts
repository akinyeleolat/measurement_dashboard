// src/handlers/canvasHandlers.ts
import { Rectangle } from '../types';
import { calculateDistance } from '../utils/canvasUtils';

interface HandleMouseParams {
  event: React.MouseEvent;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  startPoint: { x: number; y: number } | null;
  setStartPoint: (point: { x: number; y: number } | null) => void;
  setIsDrawing: (isDrawing: boolean) => void;
  setTempRect: (rect: Rectangle | null) => void;
  rectangles: Rectangle[];
}

export const handleMouseDown = ({
  event,
  canvasRef,
  setIsDrawing,
  setStartPoint,
  setTempRect,
  rectangles,
}: HandleMouseParams) => {
  if (rectangles.length >= 2) return;

  setIsDrawing(true);

  const rect = canvasRef.current?.getBoundingClientRect();
  if (!rect) return;

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  setStartPoint({ x, y });
  setTempRect({ x, y, width: 0, height: 0 });
};

export const handleMouseMove = ({
  event,
  canvasRef,
  startPoint,
  setTempRect,
  isDrawing,
}: HandleMouseParams & { isDrawing: boolean }) => {
  if (!isDrawing || !startPoint) return;

  const rect = canvasRef.current?.getBoundingClientRect();
  if (!rect) return;

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const width = x - startPoint.x;
  const height = y - startPoint.y;

  setTempRect({ x: startPoint.x, y: startPoint.y, width, height });
};

export const handleMouseUp = ({
  isDrawing,
  tempRect,
  setIsDrawing,
  setTempRect,
  setStartPoint,
  setRectangles,
}: {
  isDrawing: boolean;
  tempRect: Rectangle | null;
  setIsDrawing: (isDrawing: boolean) => void;
  setTempRect: (rect: Rectangle | null) => void;
  setStartPoint: (point: { x: number; y: number } | null) => void;
  setRectangles: (cb: (prev: Rectangle[]) => Rectangle[]) => void;
}) => {
  if (!isDrawing || !tempRect) return;

  setIsDrawing(false);
  setRectangles(prev => [...prev, tempRect]);
  setTempRect(null);
  setStartPoint(null);
};

export const handleSave = ({
  rectangles,
  onSave,
  setRectangles,
  drawRectangles,
}: {
  rectangles: Rectangle[];
  onSave: (record: any) => void;
  setRectangles: (rectangles: Rectangle[]) => void;
  drawRectangles: (rectangles: Rectangle[]) => void;
}) => {
  if (rectangles.length !== 2) return;

  const [r1, r2] = rectangles;
  const distance = calculateDistance(r1, r2);

  const newRecord = {
    id: crypto.randomUUID(),
    rectangles: [r1, r2],
    distance: parseFloat(distance.toFixed(2)),
    createdAt: new Date().toISOString(),
  };

  onSave(newRecord);
  setRectangles([]);
  drawRectangles([]);
};

export const handleClear = ({
  setRectangles,
  setTempRect,
  setIsDrawing,
  drawRectangles,
}: {
  setRectangles: (rectangles: Rectangle[]) => void;
  setTempRect: (rect: Rectangle | null) => void;
  setIsDrawing: (isDrawing: boolean) => void;
  drawRectangles: (rectangles: Rectangle[]) => void;
}) => {
  setRectangles([]);
  setTempRect(null);
  setIsDrawing(false);
  drawRectangles([]);
};