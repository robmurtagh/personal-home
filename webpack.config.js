const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })
  ]
};