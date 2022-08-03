const baseConfig = require('./config.base.ts')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const configurationProd = {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'sass-loader',
        ],
        include: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.s?(a|c)ss$/,
        use: ['css-loader', 'sass-loader'],
        exclude: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          'ts-loader',
        ],
        exclude: [/node_modules/, /example/],
      }
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
}

module.exports = {
  ...baseConfig,
  ...configurationProd
}