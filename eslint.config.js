const { configs } = require('@eslint/js')
const { browser, node } = require('globals')
const pluginReact = require('eslint-plugin-react')
const _configs = pluginReact.configs

module.exports = [
  {
    ignores: [
      'docs/**/*',
      'node_modules/**/*',
      '.next/**/*',
      'out/**/*',
      'build/**/*',
      'dist/**/*'
    ]
  },

  // Base JavaScript configuration
  configs.recommended,

  // JavaScript/JSX files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...browser,
        ...node
      }
    }
  },

  // CommonJS files (like server.js)
  {
    files: ['server.js', 'next.config.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'commonjs'
      },
      globals: {
        ...node
      }
    }
  },

  // React configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...browser,
        ...node
      }
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      ..._configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      // 'react/prop-types': 'off', // Desabilita validação de prop-types
      'react/no-unknown-property': ['error', {
        'ignore': ['jsx', 'global'] // Permite jsx e global como propriedades
      }],

      // Variable rules
      'no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],

      // Formatting rules
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
