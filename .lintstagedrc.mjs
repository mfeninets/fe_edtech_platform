const config = {
  '*.{ts,tsx,js,jsx}': [
    'yarn prettier --write',
    'yarn eslint --fix',
  ],
  '*.{json,css,md}': ['yarn prettier --write'],
};

export default config;

