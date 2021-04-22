// Class
import Component from "../../../class/Component"
// Data
import tail from './tile.json'
// Help
import template from "./template"
import css from "../../../helper/css"
import random from "../../../helper/random"
import roundRect from "../../../helper/roundRect"
// Event
import keydown from "./keydown"

export default class GAME_2048 extends Component {
    constructor(root, parent) {
        super(root, parent, {
            name: 'GAME_2048',
            url: 'game2048',
            title: '2048'
        })

        // Constant
        this.WIDTH = 350
        this.HEIGHT = 350
        this.MARGIN = 16
        this.DPI_WIDTH = this.WIDTH * 2
        this.DPI_HEIGHT = this.HEIGHT * 2
        this.ROWS_COUNT = 4
        this.COLS_COUNT = 4
        this.TAIL_WIDTH = (this.DPI_WIDTH - ((this.COLS_COUNT + 1) * this.MARGIN)) / this.COLS_COUNT
        this.TAIL_HEIGHT = (this.DPI_HEIGHT - ((this.ROWS_COUNT + 1) * this.MARGIN)) / this.ROWS_COUNT

        // Variable
        this.best = 0
        this.score = 0
        this.allowed = true

        // Dom
        this.$best = undefined
        this.$body = undefined
        this.$game = undefined
        this.$score = undefined
        this.$newGame = undefined

        this.$canvas = undefined

        this.field = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]

        this.ctx = undefined
    }

    initConstructor() {
        this.$game = this.$root.querySelector('[data-game]')
        this.$body = this.$root.querySelector('[data-body]')
        this.$best = this.$root.querySelector('[data-value="best"]')
        this.$score = this.$root.querySelector('[data-value="score"]')
        this.$newGame = this.$root.querySelector('[data-btn="new-game"]')

        this.$canvas = this.$root.querySelector('canvas')

        this.ctx = this.$canvas.getContext('2d')
    }

    init() {
        this.setSize()
        this.paint()

        document.addEventListener('keydown', keydown.bind(this))
    }

    paint() {
        for (let i = 0; i < 2; i++) this.createTail()

        this.bgTail()
    }

    createTail() {
        const value = random('tail')
        const [x, y] = random('coords', this)
        this.field[y][x] = value

        this.$game.insertAdjacentHTML('beforeend', `
            <div data-value="${value}"
                data-coords="${x + ',' + y}"
                class="tail motion"
                style="
                    transform: translate(${this.coords(x)}px, ${this.coords(y)}px) scale(0.5);
                    width: ${this.TAIL_WIDTH / 2}px;
                    height: ${this.TAIL_HEIGHT / 2}px;
                    background: ${tail[value].tile};
                ">${value}</div>`)

        const elem = this.$root.querySelector(`[data-coords="${x + ',' + y}"]`)
        setTimeout(() => {
            elem.style.transform = `translate(${this.coords(x)}px, ${this.coords(y)}px)`
        }, 300)
        setTimeout(() => elem.classList.remove('motion'), 400)
    }
    bgTail() {
        for (let iY = 0; iY < this.COLS_COUNT; iY++) {
            for (let iX = 0; iX < this.ROWS_COUNT; iX++) {
                const x = (iX * this.TAIL_WIDTH) + ((iX + 1) * this.MARGIN)
                const y = (iY * this.TAIL_HEIGHT) + ((iY + 1) * this.MARGIN)

                roundRect(this)(x, y, this.TAIL_WIDTH, this.TAIL_HEIGHT, 10)
            }
        }
    }
    setTail(tail, x, y) {
        // TODO: dinamic transition
        tail.dataset.coords = x + ',' + y
        tail.style.transform = `translate(${this.coords(x)}px, ${this.coords(y)}px)`

        return 300 // transiton
    }
    mergeTail(x, y, value, ms) {
        console.log(x, y, value, ms)
        const mergeList = this.$game.querySelectorAll(`[data-coords="${x + ',' + y}"]`)
        console.log(mergeList)

        const [xC, yC] = [this.coords(x), this.coords(y)]

        setTimeout(() => {
            mergeList[0].style.transform = `translate(${xC}px, ${yC}px) scale(1.2)`
            mergeList[0].style.transition = `140ms 0s linear`

            mergeList[0].textContent = value
            mergeList[0].style.background = tail[value].tile

            mergeList[1].remove()
        }, ms)

        setTimeout(() => {
            mergeList[0].style.transform = `translate(${xC}px, ${yC}px)`
            mergeList[0].style.transition = `.2s 0s ease`
        }, ms + 140)
    }
    coords(val) {
        return ((val * this.TAIL_WIDTH / 2) + ((val + 1) * this.MARGIN) / 2)
    }
    setSize() {
        const lists = ['$body', '$canvas']

        lists.map(element => {
            css(this[element], {
                width: this.WIDTH + 'px',
                height: this.HEIGHT + 'px'
            })
        })

        this.$canvas.width = this.DPI_WIDTH
        this.$canvas.height = this.DPI_HEIGHT
    }
    template() {
        return template()
    }
    link(url) {
        super.link(url);
    }
}