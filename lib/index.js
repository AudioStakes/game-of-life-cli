#!/usr/bin/env node

const Cell = require('./cell')
const CellProvider = require('./cell-provider')
const Board = require('./board')
const BoardPresenter = require('./board-presenter')
const LifeGame = require('./life-game')

const exec = (argv) => {
  const cellProvider = new CellProvider(new Cell({ isAlive: true }), new Cell({ isAlive: false }))
  const board = new Board(argv.rows, argv.columns, cellProvider)
  const boardPresenter = new BoardPresenter(argv.alive, argv.dead)
  const lifeGame = new LifeGame(board, boardPresenter, argv.time)

  lifeGame.start()
}

module.exports = exec
