import path from 'path'
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin'

module.exports = {
  entry: './src/index',
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js'],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
  },
  mode: 'development',
}
