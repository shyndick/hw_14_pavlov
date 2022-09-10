class Nav {
    constructor() {
        this.localDataNav = JSON.parse(localStorage.getItem('dataNav'));

        this.element='';

        this.create = () => {
            this.element = document.createElement('nav');
            this.element.classList.add('nav');
            let li = '';

            this.localDataNav.forEach(({slug, title})=>{
                li += `<li class="nav_item"><a class="a" href="#${slug}">${title}</a></li>`

            })

            this.element.innerHTML=`<ul class="nav_items">
                                    ${li}
                                </ul>`
            return this.element
        }

        this.init = () => {
            return this.create()
        }
    }
}

const nav = new Nav().init();
export default nav