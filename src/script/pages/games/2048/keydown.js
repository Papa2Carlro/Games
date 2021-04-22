export default function keydown(e) {
    if (!this.allowed) return
    this.allowed = false
    setTimeout(() => this.allowed = true, 220)

    const tails = []

    this.field.map((row, index) => {
        row.map((tail, inx) => {
            if (tail) tails.push([inx, index])
        })
    })

    switch (e.key) {
        case 'ArrowUp':
            tails.sort((a, b) => {
                if (a[1] < b[1]) return -1
                else if (a[1] > b[1]) return 1
                return 0
            })

            for (const [x, y] of tails) {
                const tail = this.$game.querySelector(`[data-coords="${x + ',' + y}"]`)

                for (let i = 0; i < 4; i++) {
                    if (i === y) {
                        break
                    } else if (this.field[i][x] === this.field[y][x]) {
                        this.field[i][x] = this.field[y][x] * 2
                        const ms = this.setTail(tail, x, i)
                        this.mergeTail(x, i, this.field[i][x], ms)
                        this.field[y][x] = 0
                        break
                    } else if (!this.field[i][x]) {
                        this.field[i][x] = this.field[y][x]
                        this.setTail(tail, x, i)
                        this.field[y][x] = 0
                        break
                    }
                }
            }
            break

        case 'ArrowDown':
            tails.sort((a, b) => {
                if (a[1] < b[1]) return 1
                else if (a[1] > b[1]) return -1
                return 0
            })

            for (const [x, y] of tails) {
                const tail = this.$game.querySelector(`[data-coords="${x + ',' + y}"]`)

                for (let i = 3; i >= 0; i--) {
                    if (i === y) {
                        break
                    } else if (this.field[i][x] === this.field[y][x]) {
                        this.field[i][x] = this.field[y][x] * 2
                        const ms = this.setTail(tail, x, i)
                        this.mergeTail(x, i, this.field[i][x], ms)
                        this.field[y][x] = 0
                        break
                    } else if (!this.field[i][x]) {
                        this.field[i][x] = this.field[y][x]
                        this.setTail(tail, x, i)
                        this.field[y][x] = 0
                        break
                    }
                }
            }
            break

        case 'ArrowLeft':
            tails.sort((a, b) => {
                if (a[0] < b[0]) return -1
                else if (a[0] > b[0]) return 1
                return 0
            })

            for (const [x, y] of tails) {
                const tail = this.$game.querySelector(`[data-coords="${x + ',' + y}"]`)

                for (let i = 0; i < 4; i++) {
                    if (i === x) {
                        break
                    } else if (this.field[y][i] === this.field[y][x]) {
                        this.field[y][i] = this.field[y][x] * 2
                        const ms = this.setTail(tail, i, y)
                        this.mergeTail(i, y, this.field[y][i], ms)
                        this.field[y][x] = 0
                        break
                    } else if (!this.field[y][i]) {
                        this.field[y][i] = this.field[y][x]
                        this.setTail(tail, i, y)
                        this.field[y][x] = 0
                        break
                    }
                }
            }
            break

        case 'ArrowRight':
            tails.sort((a, b) => {
                if (a[0] < b[0]) return 1
                else if (a[0] > b[0]) return -1
                return 0
            })

            for (const [x, y] of tails) {
                const tail = this.$game.querySelector(`[data-coords="${x + ',' + y}"]`)

                for (let i = 3; i >= 0; i--) {
                    if (i === x) {
                        break
                    } else if (this.field[y][i] === this.field[y][x]) {
                        this.field[y][i] = this.field[y][x] * 2
                        const ms = this.setTail(tail, i, y)
                        this.mergeTail(i, y, this.field[y][i], ms)
                        this.field[y][x] = 0
                        break
                    } else if (!this.field[y][i]) {
                        this.field[y][i] = this.field[y][x]
                        this.setTail(tail, i, y)
                        this.field[y][x] = 0
                        break
                    }
                }
            }
            break
    }

    this.createTail()
}
