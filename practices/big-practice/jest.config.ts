export default {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};