'use client';

import { MainErrorFallback } from '@/components/errors/main';
import { apolloClient } from '@/lib/graphql/client';
import { ApolloProvider } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ErrorBoundary>
  );
};
