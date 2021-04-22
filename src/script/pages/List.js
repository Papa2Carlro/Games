// Class
import Component from "../class/Component"
// Data
import games from "../data/games"

export default class List extends Component {
    constructor(root, parent) {
        super(root, parent, {
            name: 'List',
            url: '',
            title: 'Games'
        })
    }

    template() {
        return `
            <div class="container">
                <div class="list">
                    <div class="list__title">Список игр</div>
                
                    <ul class="list__sked">
                        ${games.map(item => `
                          <li data-card data-link="/game${item.link}" class="list__sked-item">
                              <img class="list__sked-image" src="${item.image}" alt="${item.link}">   
                              
                              <div class="list__sked-content">
                                  <div class="list__sked-title">${item.name}</div> 
                              </div>
                          </li>`).join('\n')}
                    </ul>
                </div>
            </div>`
    }

    init() {
        // TODO: Метод destroy
        document.addEventListener('click', e => {
            const target = e.target.closest('[data-card]')
            if (target) this.link(target.dataset.link)
        })
    }

    link(url) {
        super.link(url);
    }
}