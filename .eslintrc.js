module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'prettier/prettier': ['warn', { endOfLine: 'lf' }],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/prop-types': 'off',
    'react/destructuring-assignment': ['off'],
  },
};
