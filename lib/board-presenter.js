const stringWidth = require('string-width')

class BoardPresenter {
  constructor (aliveString, deadString) {
    this.defineDisplayStrings(aliveString, deadString)
  }

  defineDisplayStrings (aliveString, deadString) {
    const aliveStringWidth = stringWidth(aliveString)
    const deadStringWidth = stringWidth(deadString)
    const diff = Math.abs(aliveStringWidth - deadStringWidth)

    let aliveDisplayString = aliveString
    let deadDisplayString = deadString

    if (diff) {
      const padStringAtStart = ' '.repeat(Math.ceil(diff / 2))
      const padStringAtEnd = ' '.repeat(Math.floor(diff / 2))

      if (aliveStringWidth > deadStringWidth) {
        deadDisplayString = padStringAtStart + deadString + padStringAtEnd
      } else {
        aliveDisplayString = padStringAtStart + aliveString + padStringAtEnd
      }
    }

    this.aliveDisplayString = aliveDisplayString
    this.deadDisplayString = deadDisplayString
  }

  draw (board) {
    const output = board.cells.map(row => {
      return row.map(cell => cell.isAlive ? this.aliveDisplayString : this.deadDisplayString).join(' ')
    }).join('\n')

    console.clear()
    console.log(output)
  }
}

module.exports = BoardPresenter
