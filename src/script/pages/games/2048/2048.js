// Class
import Component from "../../../class/Component"
// Help
import template from "./template"

export default class GAME_2048 extends Component {
    constructor(root, parent) {
        super(root, parent, {
            name: 'GAME_2048',
            url: 'game2048',
            title: '2048'
        })

        // Dom
        this.$best = undefined
        this.$score = undefined
    }

    initConstructor() {
        this.$best = this.$root.querySelector('[data-value="best"]')
        this.$score = this.$root.querySelector('[data-value="score"]')
    }

    init() {

    }

    template() {
        return template()
    }
    link(url) {
        super.link(url);
    }
}