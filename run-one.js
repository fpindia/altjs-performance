const { performance } = require('perf_hooks')

const { ColorSpaceManipulation } = require('./typescript/dist')
const Manip = require('./purescript/output/Manip/')

let start

switch (process.argv[2]) {
  case 'typescript:color-space-manipulation': {
    const image = ColorSpaceManipulation.make(1024, 768)
    start = performance.now()
    for (let i = 0; i < 5; i++) {
        let x = ColorSpaceManipulation.run(image)
        // console.log(x)
    }
    break
  }
  case 'purescript:color-space-manipulation': {
    const image = Manip.make(1024, 768)
    // console.log(image)
    start = performance.now()
    for (let i = 0; i < 5; i++) {
        let x = Manip.run(image)
        // console.log(x)
    }
    break
  }
}

const elapsed = performance.now() - start
const mem = process.memoryUsage()
const mb = n => (n / 1048576).toFixed(2) + 'M'

console.log({
  name: process.argv[2],
  elapsed: ~~elapsed + 'ms',
  mem: [mb(mem.rss), mb(mem.heapUsed), mb(mem.heapTotal)],
})
