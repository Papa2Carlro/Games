import coords from "./coords"
import css from "../../../helper/css"

export default function setTail(tail, x, y, index) {
    tail.dataset.coords = x + ',' + y
    this.tailList[index].coords = {x, y}
    const [xT, yT] = [coords(x, this), coords(y, this)]

    css(tail, {
        transform: `translate(${xT}px, ${yT}px)`,
        transition: '160ms 0s linear'
    })
}