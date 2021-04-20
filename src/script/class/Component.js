export default class Component {

    link(url) {
        this.$parent.proxy.page = url

        const baseUrl = window.location.protocol + "//" + window.location.host
        const newUrl = url ? baseUrl + url : baseUrl

        history.pushState(null, null, newUrl)
    }

    render() {
        this.$root.innerHTML = ''
        this.$root.insertAdjacentHTML('beforeend', this.template())

        this.initConstructor()
        this.init()
    }

    template() {
        throw new Error('Метод template должен быть реализован')
    }

    initConstructor() {
        throw new Error('Метод initConstructor должен быть реализован')
    }

    init() {
        throw new Error('Метод init должен быть реализован')
    }
}