const nodeExternal = require('webpack-node-externals')

module.exports = {
  entry: './src/server.ts',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'serverBundle.js',
  },
  target: 'node',
  externals: [nodeExternal()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
      },
    ],
  },
}
