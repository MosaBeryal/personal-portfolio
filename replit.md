# Portfolio Website with Contact Management

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express.js. The application features a responsive portfolio showcase with contact form functionality, built using modern web technologies and design patterns.

## System Architecture

The application follows a monorepo structure with clear separation between client and server components:

- **Frontend**: React with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for data management
- **Styling**: Tailwind CSS with custom design system and dark/light theme support
- **Build System**: Vite for frontend bundling and development server
- **Deployment**: Production build optimized for Node.js environments

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Styling System**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL (Neon Database compatible)
- **Session Management**: In-memory storage with PostgreSQL session store support
- **Development**: Hot-reload with automatic error handling and logging

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contacts Table**: Contact form submissions with timestamp tracking
- **Migrations**: Drizzle-managed database migrations in `/migrations` directory

### UI Components
- Complete design system with consistent theming
- Responsive navigation with mobile menu support
- Contact form with validation and toast notifications
- Portfolio sections: About, Experience, Projects, Skills, Education
- Dark/light theme toggle with system preference detection

## Data Flow

1. **Client Requests**: React frontend makes API calls using React Query
2. **Server Processing**: Express.js routes handle API requests with validation
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

### Contact Form Flow
1. User fills out contact form with validation
2. Form data validated using Zod schema
3. API request sent to `/api/contact` endpoint
4. Server validates and stores contact in database
5. Success/error feedback displayed via toast notifications

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, shadcn/ui component library
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Animations**: Framer Motion for smooth transitions
- **Form Management**: React Hook Form, Hookform Resolvers
- **Validation**: Zod for schema validation
- **Utilities**: clsx, date-fns, lucide-react icons

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Development**: Hot-reload, error overlay, runtime error handling
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- Frontend served by Vite development server with HMR
- Backend runs on Express with automatic restart on changes
- Database migrations managed through Drizzle Kit
- Environment variables for database connection

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production
4. **Database**: PostgreSQL connection via environment variables
5. **Session Storage**: Production-ready session management

### Environment Configuration
- Development: Local development with hot-reload
- Production: Optimized builds with static asset serving
- Database: Configurable via `DATABASE_URL` environment variable
- Replit Integration: Special handling for Replit development environment

## Recent Changes

- **June 29, 2025**: Initial portfolio setup with complete animations system
- **June 29, 2025**: Enhanced bidirectional scroll animations for all sections
- **June 29, 2025**: Added professional profile picture with floating animations
- **June 29, 2025**: Updated En Route Technologies projects with detailed descriptions
- **June 29, 2025**: Improved K2X Technologies project listings with full details
- **June 29, 2025**: Repository setup with README, LICENSE, and deployment documentation

## Repository Setup

The portfolio is now ready for Git repository deployment with:
- Comprehensive README.md with setup and customization instructions
- MIT License for open source sharing
- Detailed deployment guide for multiple platforms
- Proper .gitignore for clean repository management
- Complete documentation for development and production workflows

## User Preferences

```
Preferred communication style: Simple, everyday language.
```