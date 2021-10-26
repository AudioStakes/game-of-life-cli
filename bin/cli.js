#!/usr/bin/env node

const minimist = require('minimist')
const exec = require('../lib/index')

const args = process.argv.slice(2)
const minimistOpts = {
  string: ['alive', 'dead'],
  alias: { c: 'columnCount', r: 'rowCount', t: 'time', a: 'alive', d: 'dead', h: 'help' },
  default: { a: '■', c: 15, d: '□', r: 15, t: 500 },
  unknown: (option) => { throw new Error('Unknown option ' + option) }
}
const argv = minimist(args, minimistOpts)

if (argv.help) {
  const usage = `Usage: game-of-life-cli [options]

A Node.js CLI application of Conway's Game of Life that supports specifying the display strings of alive and dead cells.

Options:
  -c, --columnCount <number> Specify the number of columns on the board (default: 15)
  -r, --rowCount <number>    Specify the number of rows on the board (default: 15)
  -t, --time <number>        Specify the time interval on the order of milliseconds to step to the next generation (default: 500)
  -a, --alive <string>       Specify the display string of alive cells (default: '■')
  -d, --dead <string>        Specify the display string of dead cells (default: '□')
  -h, --help                 Display help for command`

  console.log(usage)
  process.exit(0)
}

exec(argv)
