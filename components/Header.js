import nav from './Nav.js'

class Header {
    constructor() {
        this.create = () => {
            const element = document.createElement('header');
            element.classList.add('header');
            element.innerHTML=`<div class="container">
                                    <div class="header_wrapper">
                                        <div class="header_logo">
                                            <a href="#" >
                                                <img src="https://via.placeholder.com/200x60">
                                            </a>
                                        </div>
                                        ${nav.outerHTML}
                                        <div class="header_basket">
                                            <a href="#" class="a">Basket</a>
                                        </div>
                                    </div>

                                </div>`
            return element
        }
        this.init = () => {
            return this.create();
        }
    }
}

const header = new Header().init();
export default header