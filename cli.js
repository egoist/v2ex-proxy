#!/usr/bin/env node
'use strict'
const meow = require('meow')
const main = require('./lib')

const cli = meow(`
  Usage:
    v2ex-proxt [options]
    
  Options:
    -p/--port:        Proxy port
    -v/--version:     Print version
    -h/--help:        Print help (You are here!)
`, {
  alias: {
    v: 'version',
    h: 'help',
    p: 'port'
  }
})

main(cli.flags)
