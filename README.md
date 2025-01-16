# Interactive Measurement Dashboard

A React TypeScript application for drawing and measuring rectangles on a canvas, with persistent storage capabilities.

## Features

- Interactive canvas for drawing rectangles
- Real-time dimension display
- Distance calculation between rectangles
- Local storage persistence
- History view of saved measurements
- Re-draw capability from saved records

## Technologies Used

- React 18.2.0
- TypeScript 4.9.5
- HTML5 Canvas
- Local Storage API
- Create React App

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone (https://github.com/akinyeleolat/measurement_dashboard.git )
cd measurement-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Development

Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

Build the application for production:
```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

```
src/
├── components/
│   ├── CanvasMeasurement.tsx   # Main canvas component
│   ├── DimensionsDisplay.tsx   # Rectangle dimensions display
│   └── RecordsTable.tsx        # History table component
├── handlers/
│   └── canvasHandlers.ts       # Event handlers for canvas
├── utils/
│   └── canvasUtils.ts          # Canvas drawing utilities
├── types/
│   └── index.ts               # TypeScript type definitions
└── App.tsx                    # Root component
```

## Usage Guide

1. **Drawing Rectangles**
   - Click and drag on the canvas to draw a rectangle
   - Release mouse button to complete the rectangle
   - Draw a second rectangle using the same method
   - Dimensions are displayed in real-time

2. **Saving Measurements**
   - Click "Save" to store the current rectangles
   - Measurements are saved to local storage
   - The canvas is cleared for new measurements

3. **Viewing History**
   - Saved measurements appear in the table below
   - Click any row to re-draw those rectangles
   - Clear button removes current canvas content

## Limitations and Assumptions

1. **Drawing Constraints**
   - Maximum of two rectangles can be drawn at once
   - No editing of existing rectangles (clear and redraw instead)
   - Rectangles can be drawn in any direction

2. **Data Persistence**
   - Data is stored in browser's local storage
   - Clearing browser data will erase saved measurements
   - No cloud backup or sync features

3. **Browser Support**
   - Requires modern browser with HTML5 Canvas support
   - Local Storage API must be available
   - JavaScript must be enabled

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Support

For support, please open an issue in the repository or contact [akinyeleolat2005@gmail.com].