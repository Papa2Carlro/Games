// Data
import tail from "./tile.json"
// Helper
import coords from "./coords"
import css from "../../../helper/css"
import random from "../../../helper/random"

export default function createTail() {
    const value = random('tail')
    const [x, y] = random('coords', this)

    this.field[y][x] = value

    const tailEl = document.createElement('div')
    const translate = `translate(${coords(x, this)}px, ${coords(y, this)}px)`

    tailEl.className = 'tail'

    tailEl.textContent = value
    tailEl.dataset.value = value
    tailEl.dataset.coords = `${x},${y}`

    css(tailEl, {
        opacity: 0,
        transform: translate + ' scale(0.3)',

        width: `${this.TAIL_WIDTH / 2}px`,
        height: `${this.TAIL_HEIGHT / 2}px`,

        background: tail[value].tile,
        transition: '250ms 0s ease-in-out'
    })

    this.$game.insertBefore(tailEl, null)
    this.tailList.push({dom: tailEl, value, coords: {x, y}})

    setTimeout(() => {
        css(tailEl, {
            opacity: 1,
            transform: translate
        })
    }, 20)
}