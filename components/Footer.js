class Footer {
    constructor () {
        this.element='';
        this.create = () => {
            this.element = document.createElement('footer');
            this.element.classList.add('footer');
            this.element.innerHTML=`<div class="container">
                                    <div class="footer_wrapper">
                                        <div class="footer_logo">
                                            <a href="#" >
                                            <img src="http://placeimg.com/200/60/any">
                                            </a>
                                        </div>
                                        <div class="footer_info">
                                            <ul class="footer_items">
                                                <li class="footer_item">Address</li>
                                                <li class="footer_item">Phone</li>
                                                <li class="footer_item">Email</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`
            return this.element
        }
        this.init = () => {
            return this.create()
        }
    }
}

const footer = new Footer().init()
export default footer