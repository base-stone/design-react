import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import typescriptEslintParser from '@typescript-eslint/parser'
import eslintPluginImport from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist', 'eslint.config.js', 'vite.config.ts']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'prettier': prettierPlugin,
      'import': eslintPluginImport
    },
    rules: {
      'no-async-promise-executor': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react-refresh/only-export-components': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'no-useless-escape': 'off',
      'import/extensions': ['error', 'never', {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'scss': 'always'
      }],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }
      }
    }
  }
]
