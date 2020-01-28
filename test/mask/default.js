import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import examplePackage from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await examplePackage({
      text: this.input,
    })
    return res
  },
  context: Context,
})