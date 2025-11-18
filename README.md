# Cap Wallet Web App

Modern crypto wallet interface built with React, Vite, and Tailwind CSS.

## Features

- AI Transaction Protection
- Multi-Chain Support
- Self-Custody Security
- Cross-platform downloads
- Comprehensive support resources

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- React Router DOM

## Deployment

### Render

This app is configured for deployment on Render.com as a static site.

1. Connect your GitHub repository to Render
2. The `render.yaml` file contains the deployment configuration
3. Build command: `cd frontend && npm install && npm run build`
4. Publish directory: `./frontend/dist`

### Local Development

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
cd frontend
npm run build
```

The production-ready files will be in `frontend/dist`

## Environment Variables

No environment variables are required for the frontend build.

## License

All rights reserved.
