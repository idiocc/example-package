/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _examplePackage = {}
/**
 * Options for the program.
 * @record
 */
_examplePackage.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_examplePackage.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_examplePackage.Config.prototype.text

/* typal types/api.xml externs */
/**
 * An example package created with MNP.
 * @typedef {function(!_examplePackage.Config): !Promise<string>}
 */
_examplePackage.examplePackage
