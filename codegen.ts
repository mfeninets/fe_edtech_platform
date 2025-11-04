import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000/graphql',
  documents: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  generates: {
    './src/lib/graphql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/lib/graphql/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
