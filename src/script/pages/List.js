// Class
import Component from "../class/Component"
// Data
import games from "../data/games"
// Help

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

    template() {
        return `
            <div class="container">
                <div class="list">
                    <ul class="list__sked">
                        ${games.map(item => `
                          <li data-card data-link="game${item.link}" class="list__sked-item">
                              <img src="${item.image}" alt="${item.link}">          
                          </li>`).join('\n')}
                    </ul>
                </div>
            </div>`
    }

    initConstructor() {
        this.btn = document.body.querySelector('button')
    }

    init() {
        // this.btn.addEventListener('click', () => {
        //     this.link('/game2048')
        // })
    }

    link(url) {
        super.link(url);
    }
}