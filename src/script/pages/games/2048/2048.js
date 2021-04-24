// Class
import Component from "../../../class/Component"
// Data
import tail from './tile.json'
// Help
import coords from "./coords"
import template from "./template"
import createTail from "./createTail"
import css from "../../../helper/css"
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
        this.MARGIN = 18
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
        this.$backBtn = undefined

        this.$canvas = undefined

        this.field = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        this.tailList = []

        this.ctx = undefined
    }

    initConstructor() {
        this.$game = this.$root.querySelector('[data-game]')
        this.$body = this.$root.querySelector('[data-body]')
        this.$best = this.$root.querySelector('[data-value="best"]')
        this.$backBtn = this.$root.querySelector('[data-btn="back"]')
        this.$score = this.$root.querySelector('[data-value="score"]')
        this.$newGame = this.$root.querySelector('[data-btn="new-game"]')

        this.$canvas = this.$root.querySelector('canvas')

        this.ctx = this.$canvas.getContext('2d')
    }

    init() {
        this.setSize()
        this.paint()

        this.$backBtn.addEventListener('click', backEvent.bind(this))
        document.addEventListener('keydown', keydown.bind(this))
    }

    destroy() {
        this.$backBtn.removeEventListener('click', backEvent.bind(this))
        document.removeEventListener('keydown', keydown.bind(this))
    }

    newGame() {
        this.field = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        this.tailList = []
        this.$game.innerHTML = ''

        const tests = [
            { value: 2, x: 0, y: 0 },
            { value: 8, x: 1, y: 0 },
            { value: 4, x: 2, y: 0 },
            { value: 2, x: 3, y: 0 },
        ]

        tests.map(obj => createTail.call(this, 'obj', obj))

        // for (let i = 0; i < 2; i++) createTail.call(this, 'random')
    }

    paint() {
        this.newGame()
        this.bgTail()

        this.$newGame.addEventListener('click', () => this.newGame())
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

function backEvent() {
    this.link('/')
}