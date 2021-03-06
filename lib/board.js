class Board {
  constructor (rowCount, columnCount, cellProvider) {
    this.rowCount = rowCount
    this.columnCount = columnCount
    this.cellProvider = cellProvider
    this.seed()
  }

  seed () {
    this.nextGeneration({ isSeed: true })
  }

  nextGeneration ({ isSeed = false } = {}) {
    const nextCells = []

    for (let y = 0; y < this.rowCount; y++) {
      const row = []

      for (let x = 0; x < this.columnCount; x++) {
        let nextCell

        if (isSeed) {
          nextCell = this.cellProvider.seed()
        } else {
          nextCell = this.cellProvider.nextGeneration(this.cells[y][x], this.neighboursOf(x, y))
        }

        row.push(nextCell)
      }

      nextCells.push(row)
    }

    this.cells = nextCells
  }

  neighboursOf (x, y) {
    const neighbours = []

    for (let i = -1; i <= 1; i++) {
      if (y + i <= -1 || this.rowCount <= y + i) { continue }

      for (let j = -1; j <= 1; j++) {
        if ((x + j <= -1 || this.columnCount <= x + j) || (i === 0 && j === 0)) { continue }

        neighbours.push(this.cells[y + i][x + j])
      }
    }

    return neighbours
  }
}

module.exports = Board
