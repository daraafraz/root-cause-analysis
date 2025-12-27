# Root Cause Analysis

A root cause analysis application built with React and Material-UI, featuring time series visualization and alert correlation.

## What's Installed

- **React** (v19.2.0) - The UI library
- **@mui/material** (v7.3.4) - Material-UI component library
- **@mui/x-charts** (v8.14.1) - Chart components for data visualization
- **@mui/x-date-pickers** (v8.14.1) - Date and time picker components
- **@emotion/react & @emotion/styled** - The styling engine (Emotion is MUI's default)
- **react-router-dom** (v7.9.4) - Client-side routing
- **Vite** - Fast build tool and dev server

## Getting Started

The development server should already be running! Check your terminal for the local URL (usually `http://localhost:5173`).

If you need to start it again:
```bash
npm run dev
```

## Project Structure

```
root-cause-analysis/
├── index.html          # Entry HTML file
├── src/
│   ├── main.jsx       # React app entry point
│   ├── App.jsx        # Main app component with routing
│   ├── Home.jsx       # Home page with navigation
│   ├── KitchenSink.jsx # MUI component showcase
│   └── RootCause.jsx  # Root cause analysis tool
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Features

- **Root Cause Analysis Tool** - Analyze power supply instability with time series visualization
- **MUI Component Showcase** - Comprehensive demonstration of Material-UI components
- **Time Series Charts** - Interactive charts with date range selection and alert correlation
- **Alert Trigger Management** - Configure and visualize alert triggers with expression-based rules

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- **React** (v19.2.0) - UI library
- **Material-UI** (v7.3.4) - Component library
- **MUI X Charts** - Data visualization
- **MUI X Date Pickers** - Date selection components
- **React Router** - Navigation
- **Vite** - Build tool and dev server

