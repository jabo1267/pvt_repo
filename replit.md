# Seona's Birthday Universe

## Overview

This is a romantic, interactive birthday website built for Seona using React and modern web technologies. The application features a beautiful, space-themed design with falling hearts, stargazing interactions, photo galleries, and personalized content. It's built as a full-stack application with a React frontend and Express backend, using modern tooling and component libraries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables and animations
- **Component Library**: Radix UI components with shadcn/ui styling
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL-backed sessions (connect-pg-simple)
- **Development**: Hot module replacement with Vite middleware integration

### Design System
- **Color Scheme**: Deep navy background with accent pink, gold, and off-white
- **Typography**: Dancing Script for headings, Montserrat for body text
- **Theme**: Space/celestial theme with romantic elements
- **Animations**: CSS animations for falling hearts, bounce-in effects, and interactive elements

## Key Components

### Interactive Elements
- **FallingHearts**: Animated heart particles across the page
- **MuteButton**: Background music control with audio management
- **Stargazing**: Interactive star map with clickable stars revealing messages
- **Decision**: Interactive question with video modal responses
- **VideoModal**: Full-screen video playback with custom controls

### Content Sections
- **Header**: Hero section with main title and introduction
- **Gallery**: Photo gallery with hover effects and captions
- **FropsTracker**: Fictional currency tracker with chart visualization (using Recharts)

### UI Components
- Comprehensive shadcn/ui component library
- Custom styled components with Tailwind CSS
- Responsive design with mobile-first approach
- Accessibility features built into Radix UI primitives

## Data Flow

### Static Content
- Site data stored in `@/data/siteData.ts`
- Images served from Unsplash URLs and local assets
- Audio files referenced from attached assets

### User Interactions
- Smooth scrolling navigation between sections
- Intersection Observer for scroll-triggered animations
- Audio playback management with user interaction detection
- Modal state management for video and star interactions

### Backend Integration
- Express server serves static files and API routes
- Drizzle ORM handles database operations
- Session management for user state (if needed)
- Error handling and logging middleware

## External Dependencies

### Core Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- Radix UI component primitives
- Tailwind CSS for styling
- Recharts for data visualization
- React Icons for icon components

### Backend Dependencies
- Express.js web framework
- Drizzle ORM with PostgreSQL dialect
- Neon Database serverless driver
- Session storage with PostgreSQL

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- Replit-specific development plugins

## Deployment Strategy

### Development
- Vite development server with HMR
- Express server with middleware integration
- Database migrations with Drizzle Kit
- Environment variable configuration

### Production
- Vite build process creates optimized bundle
- Express server serves static files from dist/public
- Database connection via DATABASE_URL environment variable
- Session storage in PostgreSQL

### File Structure
```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Static data
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
├── server/          # Express backend
│   ├── index.ts     # Main server file
│   ├── routes.ts    # API routes
│   └── storage.ts   # Data layer
├── shared/          # Shared code
│   └── schema.ts    # Database schema
└── attached_assets/ # Static assets
```

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```