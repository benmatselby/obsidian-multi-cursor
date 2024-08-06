module.exports = [
  {
    ignores: ['node_modules', 'build'],
  },
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
  },
  {
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    env: {
      node: true,
    },
  },
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  },
];
