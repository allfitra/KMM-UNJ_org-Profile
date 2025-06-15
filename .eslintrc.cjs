/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Gunakan 'detect' agar otomatis membaca versi dari package.json
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-refresh', 'simple-import-sort'],
  rules: {
    // ✅ Sort imports secara otomatis dan rapi
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. React dan package pihak ketiga
          ['^react', '^@?\\w'],
          // 2. Modul internal (misal: @/components)
          ['^(@|components)(/.*|$)'],
          // 3. Import efek samping (seperti polyfill atau CSS)
          ['^\\u0000'],
          // 4. Parent imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // 5. Relative imports di folder yang sama
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // 6. Import file CSS
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // ✅ Matikan prop-types (jika kamu pakai TypeScript)
    'react/prop-types': 'off',

    // ✅ Peringatkan kalau export komponen tanpa React Refresh
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
