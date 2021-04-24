// Data
import tail from "./tile.json"
// Helper
import coords from "./coords"
import css from "../../../helper/css"
import random from "../../../helper/random"
import ColorConvert from "../../../helper/ColorConvert"

export default function createTail(type, tailObj) {
    let boxShadow
    let className = 'dark'

    const value = type === 'random' ? random('tail') : tailObj.value
    const [x, y] = type === 'random' ? random('coords', this) : [tailObj.x, tailObj.y]

    this.field[y][x] = value

    const tailEl = document.createElement('div')
    const translate = `translate(${coords(x, this)}px, ${coords(y, this)}px)`

    if (type === 'obj') {
        if (tailObj.value > 4) className = ''
        boxShadow = value >= 256
            ? `0 0 30px 10px ${ColorConvert(tail[value].tile)}, inset 0 0 0 1px rgb(255 255 255 / 19%)`
            : 'none'
    }

    tailEl.className = 'tail' + ` ${className}`

    tailEl.textContent = value
    tailEl.dataset.value = value
    tailEl.dataset.coords = `${x},${y}`

    css(tailEl, {
        opacity: 0,
        transform: translate + ' scale(0.3)',

        width: `${this.TAIL_WIDTH / 2}px`,
        height: `${this.TAIL_HEIGHT / 2}px`,

        background: tail[value].tile,
        transition: '250ms 0s ease-in-out',
        boxShadow
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