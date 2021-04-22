export default function random(type, _this) {
    switch (type) {
        case 'tail':
            const res = randIntException(1, 10, [])
            return res < 9 ? 2 : 4
            break

        case 'coords':
            const expX = []
            const expY = []
            _this.field.map((row, i) => {
                if (row.filter(tail => tail).length === 4) expX.push(i)
            })
            const x = randIntException(0, 3, expX)

            for (let i = 0; i < 4; i++) if (_this.field[i][x]) expY.push(i)
            const y = randIntException(0, 3, expY)

            return [x, y]
            break
    }
}

function randIntException(min, max, exp) {
    let n
    exp = Array.isArray(exp) ? exp : [(isNaN(exp) ? min-1 : exp)]

    while(true) {
        n = Math.floor(Math.random() * (max - min + 1)) + min
        if(exp.indexOf(n) < 0) return n
    }
}