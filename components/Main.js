import {getSlugOfHash, getPageData, hashChangeEvent} from '../utils/utils.js'

class Main {
    constructor() {
        this.element='';

        this.localData = JSON.parse(localStorage.getItem('data'));

        this.localDataNav = JSON.parse(localStorage.getItem('dataNav'));


        this.create = () => {
            this.element = document.createElement('main');
            this.element.classList.add('main');
            this.render(location.hash)
            hashChangeEvent(this.render)
            
        };

        this.render = (hash) => {
            const slugOfHash = getSlugOfHash(hash)
            if(!hash) {
                location.replace(`${location.pathname}#${slugOfHash}`)
            }
            
            const mainData = getPageData(slugOfHash);
            const {title, content} = mainData;

            if(mainData.slug === 'catalog') {
                this.addCatalog()
            } else {
            this.element.innerHTML=`<div class="container">
                                    <div class="main_wrapper">
                                        <h1 class="main_title">${title}</h1>
                                        <p>${content}</p>
                                    </div>
                                </div>`
                            }
            return this.element
        };

        this.addCatalog = () => {
            let li='';
                this.localData.forEach(({category, id, image, price, title})=>{
                    li+= `<li class="main_item" id="${id}">
                            <div class="item_card">
                                <div class="main_img">
                                    <img src="${image}">
                                </div>
                                <div class="main_item_info">
                                    <p class="category">${category}</p>
                                    <p class="title">${title}</p>
                                    <p class="price">${price} $</p>
                                </div>
                            </div>
                            <div class="main_item_buttons">
                                <button class="btn btn_add" data-add="${id}">Добавить</button>
                                <button class="btn btn_full" data-full="${id}">Подробнее</button>
                            </div>
                        </li>
                        `
                    this.element.innerHTML=`<div class="container">
                        <div class="main_wrapper">
                            <h1 class="main_title">Catalog</h1>
                            <ul class="main_items">
                                ${li}
                            </ul>
                        </div>
                    </div>`
                })
        }

        this.init = () => {
            this.create()
            return this.element
        };
    }
}

const main = new Main().init()
export default main