// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^next/font/local$': '<rootDir>/__mocks__/next/font/local.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', 
    '!src/**/*.d.ts', 
    '!src/**/index.ts',
  ],
};

module.exports = createJestConfig(customJestConfig);
