class CellProvider {
  constructor (aliveCell, deadCell) {
    this.aliveCell = aliveCell
    this.deadCell = deadCell
  }

  seed () {
    return Math.random() < 0.5 ? this.aliveCell : this.deadCell
  }

  nextGeneration (cell, neighbours) {
    const aliveNeighbours = neighbours.filter(neighbour => neighbour.isAlive)

    if (aliveNeighbours.length === 3 || (cell.isAlive && aliveNeighbours.length === 2)) {
      return this.aliveCell
    } else {
      return this.deadCell
    }
  }
}

module.exports = CellProvider
