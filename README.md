# BeExpertly - Frontend

Frontend application for the BeExpertly platform built with Next.js, GraphQL, and modern React patterns.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **GraphQL**: Apollo Client
- **State Management**: Zustand (feature-based)
- **Forms**: React Hook Form + Zod
- **Styling**: Tailwind CSS + shadcn/ui
- **Testing**: Jest + React Testing Library + Playwright
- **Documentation**: Storybook

## Project Structure

```
src/
├── app/                    # Next.js App Router routes
│   ├── (auth)/            # Auth route group
│   ├── (dashboard)/       # Dashboard route group
│   └── layout.tsx         # Root layout
├── components/            # Shared components
│   ├── errors/            # Error components
│   ├── layouts/           # Layout components
│   └── ui/                # shadcn/ui components
├── config/                # Configuration files
│   ├── env.ts            # Environment variables
│   └── paths.ts          # Path aliases
├── features/              # Feature modules
│   └── [feature]/
│       ├── api/          # GraphQL queries/mutations
│       ├── components/   # Feature components
│       ├── hooks/        # Feature hooks
│       ├── stores/       # Zustand stores
│       ├── types/        # Feature types
│       └── utils/        # Feature utilities
├── hooks/                 # Shared hooks
├── lib/                   # Libraries and utilities
│   └── graphql/          # Apollo Client setup
├── styles/                # Global styles
├── testing/               # Test utilities and mocks
├── types/                 # Shared TypeScript types
└── utils/                 # Shared utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Storybook
npm run storybook
```

## Architecture

This project follows a **feature-first architecture** with unidirectional data flow:

- **Shared → Features → App**: Code flows from shared utilities to features to application routes
- **No cross-feature imports**: Features are independent and compose at the app level
- **Feature-based state**: Each feature manages its own state using Zustand stores

## Code Quality

- ESLint + Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript strict mode enabled
- GraphQL Code Generator for type safety

## License

Proprietary
