module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'unicorn'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-parameter-properties': [
      'error',
      { allows: ['readonly', 'private readonly'] },
    ],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'unicorn/filename-case': ['error', { cases: { pascalCase: true, kebabCase: true } }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          prop: false,
          props: false,
          res: false,
          req: false,
          args: false,
          src: false,
          dir: false,
          env: false,
        },
      },
    ],
  },
}
