import coords from "./coords"
import tail from "./tile.json"
import css from "../../../helper/css"

export default function mergeTail(x, y, value, index, ms = 180) {
    const [mergeList, inx] = getTail.call(this, x, y)
    const [xC, yC] = [coords(x, this), coords(y, this)]

    setTimeout(() => {
        mergeList[0].dom.textContent = value
        this.tailList[inx[0]].value = value

        css(mergeList[0].dom, {
            transform: `translate(${xC}px, ${yC}px) scale(1.2)`,
            transition: '140ms 0s linear',
            background: tail[value].tile
        })

        mergeList[1].dom.remove()
        this.tailList = this.tailList.filter((_, i) => i !== inx[1])
    }, ms)

    setTimeout(() => {
        css(mergeList[0].dom, {
            transform: `translate(${xC}px, ${yC}px)`,
            transition: '.2s 0s ease'
        })
    }, ms + 140)
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
