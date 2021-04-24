// Pages
import List from "./pages/List"
// Games
import GAME_2048 from "./pages/games/2048/2048"
// Helper
import proxyHandlerPages from "./helper/proxyHandlerPages"

export default class App {
    constructor(root) {
        this.$root = document.body.querySelector(root)
        this.$loader = document.body.querySelector('#loader')
        this.$title = document.head.querySelector('title')

        // Pages
        this.list = new List(this.$root, this)
        this.game2048 = new GAME_2048(this.$root, this)

        this.proxy = new Proxy({}, proxyHandlerPages(this))

        this.init()
    }

    init() {
        window.addEventListener('load', () => {
            this.$loader.classList.add('hide')
            this.proxy.page = location.pathname
        })
    }
}