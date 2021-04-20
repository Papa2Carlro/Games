import Component from "../class/Component"

export default class List extends Component {
    constructor(root, parent) {
        super()
        this.$root = root
        this.$parent = parent

        // Constants
        this.URL = ''

        // Dom
        this.btn = undefined
    }

    initConstructor() {
        this.btn = document.body.querySelector('button')
    }

    init() {
        this.btn.addEventListener('click', () => {
            this.link('/game2048')
        })
    }

    template() {
        return `
            <h1>TEST</h1>
            <button>Toch me</button>
        `
    }

    link(url) {
        super.link(url);
    }
}