import coords from "./coords"
import tail from "./tile.json"
import css from "../../../helper/css"
import ColorConvert from "../../../helper/ColorConvert"

export default function mergeTail(x, y, value, index, ms = 180) {
    const [xC, yC] = [coords(x, this), coords(y, this)]
    const boxShadow = value >= 256
        ? `0 0 30px 10px ${ColorConvert(tail[value].tile)}, inset 0 0 0 1px rgb(255 255 255 / 19%)`
        : 'none'

    setTimeout(() => {
        const [mergeList, inx] = getTail.call(this, x, y)

        mergeList[0].dom.textContent = value
        this.tailList[inx[0]].value = value

        if (tail[value].dark) {
            if (!mergeList[0].dom.classList.contains('dark'))
                mergeList[0].dom.classList.add('dark')
        } else {
            mergeList[0].dom.classList.remove('dark')
        }

        css(mergeList[0].dom, {
            boxShadow,
            transform: `translate(${xC}px, ${yC}px) scale(1.2)`,
            transition: '140ms 0s linear',
            background: tail[value].tile
        })

        mergeList[1].dom.remove()
        this.tailList = this.tailList.filter((_, i) => i !== inx[1])
        console.log(this.tailList)

        setTimeout(() => {
            css(mergeList[0].dom, {
                transform: `translate(${xC}px, ${yC}px)`,
                transition: '.2s 0s ease'
            })
        }, 140)
    }, ms)
}

function getTail(x, y) {
    const index = []
    return [
        this.tailList.filter((elem, i) => {
            if (elem.coords.x === x && elem.coords.y === y) index.push(i)
            return elem.coords.x === x && elem.coords.y === y
        }),
        index
    ]
}
