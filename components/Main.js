import {getSlugOfHash, getPageData, hashChangeEvent} from '../utils/utils.js';
import {CATALOG} from '../constants/constants.js'

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

            this.element.innerHTML=this.getHtmlTemplate(title, content)
                            

            if(slugOfHash === CATALOG) {
                import('./Catalog.js').then(response => {
                    const responseDefault = response.default;
                    responseDefault.then(data => {
                        this.element.innerHTML=this.getHtmlTemplate(title, content, data.outerHTML)
                    })
                })
            } 
            
            return this.element
        };

        this.getHtmlTemplate = (title, content, htmlElement) => {
            return `
                        <div class="main_wrapper">
                            <h1 class="main_title">${title}</h1>
                            ${htmlElement ? htmlElement : ''}
                            <p>${content}</p>
                        </div>`
        }


        this.init = () => {
            this.create()
            return this.element
        };
    }
}

const main = new Main().init()
export default main