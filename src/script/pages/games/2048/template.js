export default function template() {
    return `
        <div class="container">
            <div class="game2048">
                ${header()}
            </div>
        </div>`
}

function header () {
    return `
        <div class="game2048__header">
            <div class="game2048__header-title">2048</div>
            
            <ul class="game2048__score">
                <li class="game2048__score-item">
                    <div class="game2048__score-title">Счет</div>
                    <div data-value="score" class="game2048__score-value">0</div>
                </li>
                
                <li class="game2048__score-item">
                    <div class="game2048__score-title">Лучший</div>
                    <div data-value="best" class="game2048__score-value">0</div>
                </li>
            </ul>
        </div>`
}