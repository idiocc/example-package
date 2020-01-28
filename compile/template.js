const { _examplePackage } = require('./example-package')

/**
 * @methodType {_examplePackage.examplePackage}
 */
function examplePackage(config) {
  return _examplePackage(config)
}

module.exports = examplePackage

/* typal types/index.xml namespace */
