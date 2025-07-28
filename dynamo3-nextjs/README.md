# Next.js Migration - Domain Lookup Application

This project demonstrates the migration of a React application (using Create React App) to Next.js 14+ with App Router, ready for Vercel deployment.

## Original vs Next.js Architecture

### Original Application (dynamo3)
- **Framework**: Create React App
- **UI Library**: Material-UI (MUI)
- **Build Tool**: react-scripts
- **Client-side routing**: React Router (implied)
- **API calls**: Direct fetch to external AWS API

### Migrated Application (dynamo3-nextjs)
- **Framework**: Next.js 14+ with App Router
- **UI Library**: Material-UI (MUI) - preserved
- **Build Tool**: Next.js built-in Turbopack
- **Routing**: Next.js App Router (file-based)
- **API calls**: Next.js API routes + external API proxy

## Key Migration Changes

### 1. Project Structure
```
Original (CRA):              Next.js:
src/                        app/
├── App.js                 ├── page.tsx (main page)
├── index.js               ├── layout.tsx (root layout)
├── App.css                ├── globals.css
└── ...                    └── api/
                               ├── health/route.ts
                               └── domains/[domain]/route.ts
                           components/
                           └── DomainLookup.tsx
```

### 2. Component Migration
- **App.js** → **app/page.tsx**: Main application component converted to Next.js page
- **React components** → **components/**: Moved to dedicated components directory
- Added **'use client'** directive for client-side components
- Updated imports to use TypeScript (.tsx)

### 3. API Route Conversion
- Created **app/api/health/route.ts**: Health check endpoint
- Created **app/api/domains/[domain]/route.ts**: Domain lookup with external API proxy
- Converted Express.js-style routes to Next.js API route handlers
- Added proper TypeScript types for request/response

### 4. Styling & UI
- Preserved Material-UI components and styling
- Integrated MUI with Next.js using **@mui/material-nextjs**
- Added Tailwind CSS for additional utility classes
- Created custom MUI theme in **lib/theme.ts**

### 5. Configuration
- **next.config.ts**: Optimized for Vercel deployment
- **vercel.json**: Vercel-specific deployment configuration
- **package.json**: Updated scripts and dependencies

## Installation & Usage

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Deployment to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Features Preserved

✅ **Domain lookup functionality**  
✅ **Material-UI components and styling**  
✅ **Responsive design**  
✅ **Search with debouncing**  
✅ **Error handling**  
✅ **TypeScript support**  

## New Features Added

🆕 **Server-side rendering (SSR)**  
🆕 **API routes for backend functionality**  
🆕 **Optimized for Vercel deployment**  
🆕 **App Router for improved performance**  
🆕 **Built-in TypeScript support**  
🆕 **Image optimization**  

## API Endpoints

- **GET /api/health**: Health check endpoint
- **GET /api/domains/[domain]**: Domain lookup endpoint (proxies to external API)

## Environment Variables

For production deployment, set the following environment variables:

```env
NODE_ENV=production
CUSTOM_KEY=your_custom_key_here
```

## Vercel Deployment

This application is optimized for Vercel deployment with:
- **Standalone output** for optimal performance
- **API routes** for serverless functions
- **Static optimization** where possible
- **Automatic HTTPS** and edge network distribution

## Migration Lessons

This migration demonstrates key principles for converting React apps to Next.js:

1. **File-based routing** replaces React Router
2. **API routes** replace Express.js server endpoints
3. **'use client'** directive for interactive components
4. **TypeScript** integration is seamless
5. **Material-UI** works well with Next.js
6. **Vercel optimization** improves performance significantly

## CustomerCreditPortal Migration Guide

For migrating the CustomerCreditPortal project mentioned in the original requirements, follow these same patterns:

1. **Project Structure**: Move client/src to app/ directory
2. **API Routes**: Convert server/routes.ts to individual app/api/*/route.ts files
3. **Authentication**: Migrate Passport.js to NextAuth.js or similar
4. **Database**: Keep Drizzle ORM, update connection for serverless
5. **OAuth**: Update callback URLs for new routing structure
6. **Components**: Add 'use client' to interactive components
7. **Environment**: Update for Vercel deployment

This demo serves as a template for that larger migration.
