const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'webPackFile.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [new htmlPlugin({
    template:'./index.ejs'
  })],
}
