// import header from './Header.js'
// import nav from './Nav.js'
// import main from './Main.js'
// import footer from './Footer.js'
import {getSlugOfHash, getPageData, hashChangeEvent} from '../utils/utils.js'

class App {
    constructor() {
        this.element='';
        this.create = () => {
            this.element = document.createElement('div');
            this.element.classList.add('app');
        };

        this.getData = () => {
            fetch('../data/data.js')
            .then(respone => respone.text())
            .then(data => {
                setTimeout(()=>{
                    localStorage.setItem('dataNav', data);

                    fetch('https://fakestoreapi.com/products')
                    .then(res=>res.text())
                    .then(data=>{
                        setTimeout(()=>{
                            if(localStorage.data) {}
                            else {
                                localStorage.setItem('data', data);
                            }
                            hashChangeEvent(this.setTitle)
                            this.render()
                            
                        }, 0)
                    });
                },0)

            })
        }

        this.setTitle = (hash) => {
            const slugOfHash = getSlugOfHash(hash);
            const data = getPageData(slugOfHash);
            document.title = (data.pageTitle)
        }

        this.render = async () => {
            document.body.appendChild(this.element);
            const dataHeader = await import('./Header.js');
            const dataMain = await import('./Main.js');
            const dataFooter = await import('./Footer.js');

            const header = dataHeader.default;
            const main = dataMain.default;
            const footer = dataFooter.default;

            this.element.appendChild(header);      
            this.element.appendChild(main);      
            this.element.appendChild(footer);
        };

        this.init = () => {
            this.getData();
            this.create();
            const head = document.querySelector('head');
            head.innerHTML=`<meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="css/style.css">
                            <title></title>`
        };
    }
}

export default new App().init()



