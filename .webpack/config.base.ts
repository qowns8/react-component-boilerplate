const { distPath, entry } = require('./config.path')
const configurationBase = {
  entry: entry,
  output: {
    filename: 'index.js',
    path: distPath,
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // modules: ['../node_modules', 'node_modules'],
  }
}

module.exports = configurationBase