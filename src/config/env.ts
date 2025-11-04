/**
 * Environment variables configuration
 * All environment variables should be validated here
 */

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  graphqlUrl:
    process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000/graphql',
} as const;
