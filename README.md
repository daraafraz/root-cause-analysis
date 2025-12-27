# Root Cause Analysis

> A static prototype that demonstrates UI patterns and interactions for root cause analysis tools using mock data.

## The Problem

When building monitoring and alerting systems, teams need to understand how to visualize time series data, correlate alerts with metrics, and help users identify root causes. Without clear UI patterns, developers often build interfaces that are hard to use or don't effectively surface the relationships between alerts and underlying system behavior.

## The Solution

This prototype demonstrates a complete root cause analysis interface built with React and Material-UI. It shows how to:
- Visualize time series data with interactive charts
- Correlate alert triggers with metric patterns
- Manage complex trigger rules with AND/OR logic
- Provide intuitive date range selection and filtering

**Note:** This is a static prototype using mock data. The goal is to demonstrate interactions and workflows, not to provide a production-ready tool.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/root-cause-analysis.git
cd root-cause-analysis

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## What This Does

- **Time Series Visualization** - Interactive charts showing metric values over time with zoom and pan capabilities
- **Alert Correlation** - Visual highlighting of alert periods overlaid on time series data
- **Trigger Rule Management** - UI for configuring complex alert triggers with AND/OR logic and expression-based rules
- **Date Range Selection** - Flexible date pickers for custom time range analysis
- **Component Showcase** - Comprehensive demonstration of Material-UI components used in the application

## What This Does NOT Do

- **Does NOT connect to real data sources** - All data is simulated/mock
- **Does NOT persist configuration** - Changes are not saved between sessions
- **Does NOT include authentication** - This is a frontend-only prototype
- **Does NOT provide backend APIs** - No server-side functionality
- **Does NOT handle production workloads** - Designed for demonstration purposes only

## Usage

### Exploring the Root Cause Analysis Tool

1. Navigate to the homepage
2. Click "View Demo" or "Try Root Cause Analysis"
3. Select different time ranges (Last 24 Hrs, Last 3 Days, Last 7 Days, or Custom)
4. Choose different rules from the dropdown to see how metrics correlate with alerts
5. Toggle "Show expressions" to see the underlying rule expressions

### Viewing Component Examples

1. From the homepage, click the "Built with Material-UI components" link in the footer
2. Or navigate directly to `/kitchen-sink`
3. Browse through the comprehensive showcase of MUI components used in the application

## How It Works

This is a single-page application (SPA) built with React and Material-UI. The application consists of three main views:

1. **Home Page** - Landing page with project overview and navigation
2. **Root Cause Analysis** - Main demo showing time series charts, alert correlation, and trigger management
3. **Kitchen Sink** - Component library showcase demonstrating all MUI components used

The root cause analysis view generates mock time series data based on selected rules and date ranges. When a rule matches the "triggering" rule, the data shows correlation patterns during alert periods. This demonstrates how the UI would surface root cause relationships in a real system.

## Project Status

🟢 **ACTIVE** - This is a prototype/demonstration project. Active development focuses on improving UI patterns and interactions.

## Contributing

Contributions are welcome! This project is particularly interested in:
- UI/UX improvements to the root cause analysis interface
- Additional component examples in the kitchen sink
- Documentation improvements
- Bug fixes and accessibility improvements

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## Security

**Security Note:** This library does not handle sensitive data, network I/O, or code execution. It is a frontend-only static prototype using mock data.

If you discover a security vulnerability, please see [SECURITY.md](SECURITY.md) for reporting guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Technologies Used

- **React** (v19.2.0) - UI library
- **Material-UI** (v7.3.4) - Component library
- **MUI X Charts** (v8.14.1) - Data visualization components
- **MUI X Date Pickers** (v8.14.1) - Date selection components
- **React Router** (v7.9.4) - Client-side routing
- **Vite** (v7.1.11) - Build tool and dev server
- **Day.js** (v1.11.18) - Date manipulation

## Project Structure

```
root-cause-analysis/
├── src/
│   ├── main.jsx          # React app entry point
│   ├── App.jsx           # Main app component with routing
│   ├── Home.jsx          # Home page with navigation
│   ├── KitchenSink.jsx   # MUI component showcase
│   └── RootCause.jsx     # Root cause analysis tool
├── index.html            # Entry HTML file
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment config
└── package.json          # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
