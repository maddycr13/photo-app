// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom', // Ensure this is set correctly
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your file structure
    "!src/**/*.d.ts",            // Exclude TypeScript declaration files
    "!src/**/index.ts",           // Exclude index files (optional)
  ],
  moduleNameMapper: {
    '^next/font/local$': '<rootDir>/__mocks__/next/font/local.js',
  },
};

module.exports = createJestConfig(customJestConfig);
