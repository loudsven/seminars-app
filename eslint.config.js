import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
      'semi': ['error', 'always'],
      'indent': ['error', 4],
      'eqeqeq': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-func-assign': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'no-unreachable': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-template': 'error',
      'no-undef': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
    },
  },
)
