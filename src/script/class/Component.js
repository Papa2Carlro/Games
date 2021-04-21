require('dotenv').config()

export default class Component {
    constructor(root, parent, options) {
        this.$root = root
        this.$parent = parent

        // Constants
        this.NAME = options.name
        this.URL = options.url
        this.TITLE = options.title
    }

    link(url) {
        this.$parent.proxy.page = url

        const baseUrl = window.location.protocol + "//" + window.location.host
        const newUrl = url ? baseUrl + url : baseUrl

        history.pushState(null, null, newUrl)
    }

    render() {
        console.clear()
        this.$parent.$title.textContent = this.TITLE

        this.$root.innerHTML = ''
        this.$root.insertAdjacentHTML('beforeend', this.template())

        this.initConstructor()
        this.init()
    }

    template() {
        throw new Error(`Метод template должен быть реализован в классе ${this.NAME}`)
    }

    initConstructor() {
        process.env.NODE_ENV === 'development'
            ? console.warn(`Метод initConstructor не реализован в классе ${this.NAME}`)
            : console.clear()
    }

    init() {
        throw new Error(`Метод init должен быть реализован в классе ${this.NAME}`)
    }
}