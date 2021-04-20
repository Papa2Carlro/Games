import Component from "../../class/Component"

export default class GAME_2048 extends Component {
    constructor(root, parent) {
        super()
        this.$root = root
        this.$parent = parent

        // Constants
        this.URL = 'game2048'

        // Dom
        this.btn = undefined
    }

    initConstructor() {
        this.btn = document.body.querySelector('button')
    }

    init() {
        this.btn.addEventListener('click', () => {
            this.link('/')
        })
    }

    template() {
        return `
        <h1>GAME_2048</h1>
        <button>back</button>
        `
    }

    link(url) {
        super.link(url);
    }
}