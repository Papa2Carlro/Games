export default function template() {
    return `
        <div class="container">
            <div class="game2048">
                ${header()} 
                
                <ul class="game2048__list">
                    <li data-btn="new-game" class="game2048__list-btn">Новая Игра</li>
                </ul>
                
                <div data-body class="game2048__body">
                    <canvas class="game2048__body-canvas"></canvas>
                    
                    <div data-game class="game2048__game"></div>
                    <div class="game2048__body-win"></div>
                    <div class="game2048__body-lose"></div>
                </div>
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