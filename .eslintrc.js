module.exports = {
  env: {
    browser: true, // for browser environments
    es6: true,     // enable ES6 features
    node: true,    // for Node.js
  },
  extends: [
    'eslint:recommended', // use recommended rules
  ],
  parserOptions: {
    ecmaVersion: 2020, // allow modern ECMAScript features
    sourceType: 'module', // enable ES modules
  },
  rules: {
    // Allow console statements
    'no-console': 'off',
    
    // Allow unused variables (useful during development)
    'no-unused-vars': 'off',

    // Allow semi-colons
    'semi': ['off', 'always'],

    // Allow single quotes
    'quotes': ['off', 'single'],

    // Allow trailing commas
    'comma-dangle': ['off', 'always-multiline'],

    // Allow indentation with spaces or tabs
    'indent': ['off', 2],
  },
};
