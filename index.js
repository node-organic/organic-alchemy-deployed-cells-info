module.exports = class extends Array {
  match (cellInfo) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].name === cellInfo.name &&
        this[i].version === cellInfo.version &&
        this[i].mode === cellInfo.mode &&
        this[i].siblingIndex === cellInfo.siblingIndex) {
        return this[i]
      }
    }
  }
  remove (cellInfo) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].name === cellInfo.name &&
        this[i].version === cellInfo.version &&
        this[i].mode === cellInfo.mode &&
        this[i].siblingIndex === cellInfo.siblingIndex) {
        this.splice(i, 1)
      }
    }
  }
  add (cellInfo) {
    if (!this.match(cellInfo)) {
      this.push(cellInfo)
    }
  }
  addMany (cellsInfo) {
    cellsInfo.forEach(v => this.add(v))
  }
}
