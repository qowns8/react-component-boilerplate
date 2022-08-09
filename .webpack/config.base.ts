const paths = require('./config.path.ts')
const configurationBase = {
  entry: paths.entry,
  output: {
    filename: 'index.js',
    path: paths.distPath,
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // modules: ['../node_modules', 'node_modules'],
  }
}

module.exports = configurationBase