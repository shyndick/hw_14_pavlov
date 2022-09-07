class Nav {
    constructor() {
        this.create = () => {
            const element = document.createElement('nav');
            element.classList.add('nav');
            element.innerHTML=`<ul class="nav_items">
                                    <li class="nav_item"><a href="#" class="a">Home</a></li>
                                    <li class="nav_item"><a href="#" class="a">Show</a></li>
                                    <li class="nav_item"><a href="#" class="a">Contacts</a></li>
                                </ul>`
            return element
        }

        this.init = () => {
            return this.create()
        }
    }
}

const nav = new Nav().init();
export default nav