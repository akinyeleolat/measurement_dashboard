import { Rectangle } from "../types";

/**
 * Utility function to calculate Euclidean distance between two rectangle centers
 */
export const calculateDistance = (r1: Rectangle, r2: Rectangle) => {
  const center1 = {
    x: r1.x + r1.width / 2,
    y: r1.y + r1.height / 2,
  };
  const center2 = {
    x: r2.x + r2.width / 2,
    y: r2.y + r2.height / 2,
  };

  const dx = center1.x - center2.x;
  const dy = center1.y - center2.y;
  return Math.sqrt(dx * dx + dy * dy);
};


export const drawRectangles = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  rects: Rectangle[]
) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each rectangle
  rects.forEach((rect, index) => {
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.strokeStyle = index === 0 ? '#4CAF50' : '#2196F3'; // Different colors for each rectangle
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw dimensions
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText(
      `${Math.round(rect.width)}×${Math.round(rect.height)}`,
      rect.x + rect.width / 2 - 20,
      rect.y + rect.height / 2
    );
  });
};
