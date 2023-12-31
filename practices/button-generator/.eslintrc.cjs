module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }, {
      usePrettierrc: true
    }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_'
    }],
    '@typescript-eslint/no-empty-function': ['error', {
      allow: ['arrowFunctions']
    }],
    'no-console': 'error',
    camelcase: ['warn', {
      properties: 'never',
      ignoreDestructuring: true
    }],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-dupe-keys': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
};