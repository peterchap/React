# Customer Credit Portal - Next.js Application

## Overview

This is a modern Customer Credit Portal built with Next.js 14+, designed for seamless deployment on Vercel with PostgreSQL database integration. The application provides a comprehensive solution for managing customer credit applications and portal access.

## Features

- **Next.js 14+ App Router** - Modern React framework with server-side rendering
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS + shadcn/ui** - Modern, responsive UI components
- **PostgreSQL + Drizzle ORM** - Robust database management
- **NextAuth.js Ready** - Authentication framework supporting multiple OAuth providers
- **TanStack Query** - Powerful data fetching and state management
- **Vercel Optimized** - Configured for optimal serverless deployment

## Tech Stack

### Frontend
- Next.js 14+ (App Router)
- React 19+
- TypeScript
- Tailwind CSS
- shadcn/ui components

### Backend
- Next.js API Routes
- PostgreSQL database
- Drizzle ORM
- NextAuth.js (authentication)

### Deployment
- Vercel (serverless)
- PostgreSQL (cloud provider)

## Project Structure

```
CustomerCreditPortal/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── customers/      # Customer management
│   │   └── credits/        # Credit application management
│   ├── components/         # Reusable UI components
│   │   └── ui/            # shadcn/ui components
│   ├── lib/               # Utilities and configurations
│   │   ├── db.ts          # Database configuration
│   │   ├── schema.ts      # Database schema
│   │   └── utils.ts       # Utility functions
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   ├── customers/         # Customer management pages
│   ├── credits/           # Credit application pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── providers.tsx      # Context providers
├── public/                # Static assets
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CustomerCreditPortal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/customer_credit_portal
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

The application uses Drizzle ORM with PostgreSQL. The schema includes:

- **users** - User authentication and profiles
- **customers** - Customer information and credit limits
- **creditApplications** - Credit application management
- **accounts** - OAuth account linking
- **sessions** - Session management

### Database Migration

```bash
# Generate migrations
npx drizzle-kit generate:pg

# Run migrations
npx drizzle-kit push:pg
```

## Authentication

The application supports multiple OAuth providers:

- Google OAuth
- Microsoft OAuth  
- GitHub OAuth
- LinkedIn OAuth

Configure provider credentials in your environment variables.

## Deployment to Vercel

### 1. Environment Variables

Set up the following environment variables in your Vercel project:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `NEXTAUTH_URL` - Your deployed URL
- OAuth provider credentials (Google, Microsoft, GitHub, LinkedIn)

### 2. Database Connection

Ensure your PostgreSQL database is accessible from Vercel. Recommended providers:
- Vercel Postgres
- Supabase
- PlanetScale
- Railway

### 3. Deploy

```bash
# Deploy to Vercel
npm run build
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## API Endpoints

### Core APIs
- `GET /api` - API health check
- `GET /api/customers` - List customers
- `POST /api/customers` - Create customer
- `GET /api/credits` - List credit applications
- `POST /api/credits` - Create credit application

### Authentication APIs
- `/api/auth/*` - NextAuth.js endpoints

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

The project follows:
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Tailwind CSS conventions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.