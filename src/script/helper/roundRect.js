export default function roundRect(_this) {
    return (x, y, width, height, radius) => {
        if (width < 2 * radius) radius = width / 2
        if (height < 2 * radius) radius = height / 2

        _this.ctx.beginPath()
        _this.ctx.moveTo(x + radius, y)
        _this.ctx.arcTo(x + width, y, x + width, y + height, radius)
        _this.ctx.arcTo(x + width, y + height, x, y + height, radius)
        _this.ctx.arcTo(x, y + height, x, y, radius)
        _this.ctx.arcTo(x, y, x + width, y, radius)

        _this.ctx.fillStyle = '#CDC1B4'
        _this.ctx.fill()

        _this.ctx.closePath()
    }
}