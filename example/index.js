import examplePackage from '../src'

(async () => {
  const res = await examplePackage({
    text: 'example',
  })
  console.log(res)
})()