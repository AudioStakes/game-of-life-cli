class LifeGame {
  constructor (board, boardPresenter, timeInterval) {
    this.board = board
    this.boardPresenter = boardPresenter
    this.timeInterval = timeInterval
  }

  start () {
    this.boardPresenter.draw(this.board)

    setInterval(this.next.bind(this), this.timeInterval)
  }

  next () {
    this.board.nextGeneration()
    this.boardPresenter.draw(this.board)
  }
}

module.exports = LifeGame
