# Portfolio Website

Personal academic portfolio website for Kocha Changelia, researcher in Political Science and Data Analysis.

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start on `http://localhost:8080` (or the next available port).

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── main.tsx        # Application entry point
```

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.
