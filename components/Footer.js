class Footer {
    constructor () {
        this.create = () => {
            const element = document.createElement('footer');
            element.classList.add('footer');
            element.innerHTML=`<div class="container">
                                    <div class="footer_wrapper">
                                        <div class="footer_logo">
                                            <a href="#" >
                                            <img src="https://via.placeholder.com/200x60">
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
            return element
        }
        this.init = () => {
            return this.create()
        }
    }
}

const footer = new Footer().init()
export default footer