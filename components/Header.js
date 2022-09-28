import nav from './Nav.js'

class Header {
    constructor() {
        this.element='';
        this.create = () => {
            this.element = document.createElement('header');
            this.element.classList.add('header');
            this.element.innerHTML=`<div class="container">
                                    <div class="header_wrapper">
                                        <div class="header_logo">
                                            <a href="/" >
                                                <img src="http://placeimg.com/200/60/any">
                                            </a>
                                        </div>
                                        ${nav.outerHTML}
                                        
                                    </div>

                                </div>`
            return this.element
        }
        this.init = () => {
            return this.create();
        }
    }
}

const header = new Header().init();
export default header