import { c } from 'erte'

/**
 * @type {_examplePackage.examplePackage}
 */
export default async function examplePackage(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@artdeco/example-package called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').examplePackage} _examplePackage.examplePackage
 */
