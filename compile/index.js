const { _examplePackage } = require('./example-package')

/**
 * An example package created with MNP.
 * @param {!_examplePackage.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function examplePackage(config) {
  return _examplePackage(config)
}

module.exports = examplePackage

/* typal types/index.xml namespace */
/**
 * @typedef {_examplePackage.Config} Config `＠record` Options for the program.
 * @typedef {Object} _examplePackage.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
