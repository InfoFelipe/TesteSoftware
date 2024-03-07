module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
    collectCoverage: true,
    coverageReporters: ["json", "lcov", "text", "clover"],
    bail: true,
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };