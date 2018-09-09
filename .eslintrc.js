const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    'browser': true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              path.resolve(__dirname, 'src'),
            ],
            plugins: [
              new DirectoryNamedWebpackPlugin(true),
            ],
          },
        },
      },
    },
  },
  rules: {
    semi: [2, 'never'],
    'consistent-return': 0,
    'default-case': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [2, { 'packageDir': path.resolve(__dirname) }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-case-declarations': 0,
    'no-return-assign': 0,
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
  }
}
