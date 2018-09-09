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
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-return-assign': 0,
  }
}
