# Project Structure

This document describes the project structure and architectural decisions.

## Architecture Overview

The project follows a **feature-first architecture** with unidirectional data flow, inspired by the bulletproof-react pattern.

### Data Flow

```
Shared → Features → App
```

- **Shared** (`components/`, `hooks/`, `lib/`, `utils/`, `types/`) - Can be used by any part of the codebase
- **Features** (`features/`) - Can only import from shared parts
- **App** (`app/`) - Can import from features and shared parts

**No cross-feature imports** - Features are independent and compose at the app level.

## Folder Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   ├── (dashboard)/       # Dashboard route group
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── provider.tsx       # App providers (Apollo, Error Boundary)
│   └── not-found.tsx      # 404 page
│
├── components/            # Shared components
│   ├── errors/            # Error components
│   ├── layouts/           # Layout components
│   └── ui/                # shadcn/ui components
│       └── button/        # Example UI component
│
├── config/                # Configuration
│   ├── env.ts            # Environment variables
│   └── paths.ts          # Path aliases
│
├── features/              # Feature modules
│   └── auth/
│       ├── api/          # GraphQL queries/mutations
│       ├── components/   # Feature components
│       ├── hooks/        # Feature hooks
│       ├── stores/       # Zustand stores
│       ├── types/        # Feature types
│       └── utils/        # Feature utilities
│
├── hooks/                 # Shared hooks
├── lib/                   # Libraries and utilities
│   └── graphql/
│       ├── client.ts     # Apollo Client setup
│       └── generated/    # GraphQL Code Generator output
│
├── styles/                # Global styles
│   └── globals.css       # Tailwind CSS + CSS variables
│
├── testing/               # Test utilities
│   ├── setup-tests.ts   # Jest setup
│   └── test-utils.tsx   # Testing utilities
│
├── types/                 # Shared TypeScript types
│   └── api.ts           # Shared API types
│
└── utils/                 # Shared utility functions
    └── cn.ts            # Class name utility
```

## Feature Structure

Each feature follows this structure (only include what's needed):

```
features/[feature-name]/
├── api/              # GraphQL queries and mutations
├── components/       # Feature-specific components
├── hooks/            # Feature-specific hooks
├── stores/           # Zustand stores (feature-based state)
├── types/            # Feature-specific TypeScript types
└── utils/            # Feature-specific utilities
```

## State Management

### Component State

- Use `useState` or `useReducer` for component-local state

### Application State

- Use **Zustand** stores organized by feature
- Store location: `features/[feature]/stores/[store-name].ts`

### Server Cache State

- Use **Apollo Client** for GraphQL data fetching and caching
- Queries/mutations in `features/[feature]/api/` or `lib/graphql/`

### Form State

- Use **React Hook Form** with **Zod** for validation
- No wrapper patterns - use directly

## GraphQL

### Apollo Client Setup

- Client configuration: `lib/graphql/client.ts`
- Includes authentication link for token management

### Code Generation

- Uses GraphQL Code Generator
- Generates TypeScript types and hooks
- Output: `lib/graphql/generated/`
- Run: `npm run codegen`

### Query/Mutation Organization

- Best practice: Organize by feature in `features/[feature]/api/`
- Or centralize in `lib/graphql/queries/` and `lib/graphql/mutations/` if many shared queries

## Testing

### Unit Tests

- **Jest** + **React Testing Library**
- Test files: `**/*.test.tsx` or `**/__tests__/**/*.tsx`
- Setup: `testing/setup-tests.ts`

### E2E Tests

- **Playwright**
- Test files: `e2e/**/*.spec.ts`

### Component Documentation

- **Storybook**
- Story files: `**/*.stories.tsx`

## Code Quality

### Linting

- **ESLint** with Next.js, TypeScript, React, and accessibility rules
- Config: `.eslintrc.json`

### Formatting

- **Prettier**
- Config: `.prettierrc.json`

### Pre-commit Hooks

- **Husky** + **lint-staged**
- Runs ESLint and Prettier on staged files

## Environment Variables

- Configuration: `config/env.ts`
- Example: `.env.example`
- Validation: Environment variables are validated at build time

## Path Aliases

All imports use `@/` prefix:

- `@/app` → `src/app`
- `@/components` → `src/components`
- `@/features` → `src/features`
- `@/lib` → `src/lib`
- etc.

Configured in `tsconfig.json` and `config/paths.ts`.

## Next Steps

1. Run `npm install` to install dependencies
2. Set up environment variables (copy `.env.example` to `.env`)
3. Configure GraphQL endpoint in `.env`
4. Run `npm run codegen` to generate GraphQL types
5. Add shadcn/ui components: `npx shadcn-ui@latest add [component]`
6. Start development: `npm run dev`
