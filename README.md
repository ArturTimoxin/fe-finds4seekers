# Frontend thefinds4seekers

A frontend project built with [Next.js](https://nextjs.org/) v9. This project integrates with various libraries and tools to provide a modern web application experience.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.21.3 is REQUIRED)
- [Python](https://www.python.org/) (v3.10.4 is REQUIRED)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/thefinds4seekers-next.git
   cd thefinds4seekers-next
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Fill env data object in `next.config.js` file in the root directory. The properties list defined in .env.example
   - Add the required environment variables (refer to [Environment Variables](#environment-variables)).

---

## Development

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

To start the production server, run:

```bash
npm start
# or
yarn start
```

The production server will run on port defined in `next.config.js`.

---

## API Integration

This project uses `axios` for making HTTP requests to external APIs. Ensure the API endpoints are properly configured in your code.

---

## Project Structure

```
thefinds4seekers-next/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Reusable React components
├── pages/            # Next.js pages and API routes
├── utils/            # Utility functions
├── .env.example      # Environment variable names
└──  next.config.js    # Next.js configuration
```

---

## Deployment

This project can be deployed to various platforms, such as Vercel, Netlify, or any Node.js hosting service.

### Deploying to Vercel

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
