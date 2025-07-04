const { configs } = require('@eslint/js')
const { browser, node } = require('globals')
const pluginReact = require('eslint-plugin-react')
const pluginSimpleImportSort = require('eslint-plugin-simple-import-sort')

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
      react: pluginReact,
      'simple-import-sort': pluginSimpleImportSort
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
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],

      // import sorts see
      // https://github.com/lydell/eslint-plugin-simple-import-sort/
      // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/master/examples/.eslintrc.js
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages. `react` related packages come first.
            // if we had more than one array, each array is separated
            // by a space
            ['^react', '^node:'],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^@?\\w'],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
            // Side effect imports.
            ['^\\u0000']
          ]
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
