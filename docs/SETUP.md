# Setup Guide

This guide will help you get the project up and running.

## Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

## Initial Setup

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Variables

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` and set your GraphQL endpoint:

```env
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
```

### 3. Initialize Husky (Pre-commit Hooks)

Husky should be initialized automatically when you run `npm install`, but if needed:

```bash
npm run prepare
```

### 4. Generate GraphQL Types

Once your GraphQL endpoint is available, generate TypeScript types:

```bash
npm run codegen
```

For development with auto-regeneration:

```bash
npm run codegen:watch
```

## Development

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Run Tests

```bash
# Unit tests
npm test

# Unit tests in watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# E2E tests with UI
npm run test:e2e:ui
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type check
npm run check-types
```

### Storybook

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## Adding shadcn/ui Components

To add shadcn/ui components to the project:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add card
```

The components will be automatically added to `src/components/ui/`.

## Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed information about the project architecture.

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment variables
3. ✅ Generate GraphQL types
4. Add shadcn/ui components as needed
5. Start building features!

## Common Commands

| Command               | Description                       |
| --------------------- | --------------------------------- |
| `npm run dev`         | Start development server          |
| `npm run build`       | Build for production              |
| `npm run start`       | Start production server           |
| `npm run lint`        | Run ESLint                        |
| `npm run format`      | Format code with Prettier         |
| `npm test`            | Run unit tests                    |
| `npm run test:e2e`    | Run E2E tests                     |
| `npm run storybook`   | Start Storybook                   |
| `npm run codegen`     | Generate GraphQL types            |
| `npm run check-types` | Type check without emitting files |
