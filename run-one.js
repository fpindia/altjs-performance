const { performance } = require('perf_hooks')

const { ColorSpaceManipulation } = require('./typescript/dist')

let start

switch (process.argv[2]) {
  case 'typescript:color-space-manipulation': {
    const image = ColorSpaceManipulation.make(1024, 768)
    start = performance.now()
    for (let i = 0; i < 5; i++) {
      ColorSpaceManipulation.run(image)
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
