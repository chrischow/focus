module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:svelte/recommended'],
  plugins: ['prettier', 'svelte'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
    },
    {
      files: ['*.js'],
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
