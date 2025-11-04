import { env } from '../env';

describe('env configuration', () => {
  it('should have default graphql URL', () => {
    expect(env.graphqlUrl).toBeDefined();
    expect(typeof env.graphqlUrl).toBe('string');
  });

  it('should have nodeEnv defined', () => {
    expect(env.nodeEnv).toBeDefined();
    expect(['development', 'production', 'test']).toContain(env.nodeEnv);
  });

  it('should have isDevelopment boolean', () => {
    expect(typeof env.isDevelopment).toBe('boolean');
  });

  it('should have isProduction boolean', () => {
    expect(typeof env.isProduction).toBe('boolean');
  });

  it('should have consistent nodeEnv and isDevelopment', () => {
    if (env.nodeEnv === 'development') {
      expect(env.isDevelopment).toBe(true);
      expect(env.isProduction).toBe(false);
    } else if (env.nodeEnv === 'production') {
      expect(env.isDevelopment).toBe(false);
      expect(env.isProduction).toBe(true);
    }
  });
});

