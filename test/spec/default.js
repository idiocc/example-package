import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import examplePackage from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof examplePackage, 'function')
  },
  async 'calls package without error'() {
    await examplePackage()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await examplePackage({
      text,
    })
    ok(res, text)
  },
}

export default T