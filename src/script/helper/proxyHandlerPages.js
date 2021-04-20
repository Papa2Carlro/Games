export default function proxyHandlerPages(_this) {
    return {
        set(...arg) {
            const result = Reflect.set(...arg)
            const page = _this.proxy.page ? _this.proxy.page.replace('/', '') : false
            _this[page ? page : 'list'].render()
            return result
        }
    }
}