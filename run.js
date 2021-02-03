const { execSync } = require('child_process')

const times = +(process.argv[2] ?? 5)

const benchmarks = ['typescript:color-space-manipulation']

for (let i = 0; i < times; i++) {
  for (const benchmark of benchmarks) {
    execSync(`node run-one.js ${benchmark}`, { stdio: 'inherit' })
  }
}
