const path = require('path')

const rootPath = path.join(__dirname, '..')
const distPath = path.join(rootPath, 'dist')
const srcPath = path.join(rootPath, 'src')
const entry = path.join(srcPath, 'index.tsx')
const modulesPath = path.join(srcPath, 'node_modules')

module.exports = {
  rootPath,
  distPath,
  entry,
  srcPath,
  modulesPath
}