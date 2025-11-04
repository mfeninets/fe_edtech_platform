import { ReactElement } from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { render, type RenderOptions } from '@testing-library/react';

// Create a mock Apollo Client for tests
const createMockApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const mockApolloClient = createMockApolloClient();
  return (
    <ApolloProvider client={mockApolloClient}>{children}</ApolloProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
