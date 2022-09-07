class Main {
    constructor() {
        this.create = () => {
            const element = document.createElement('main');
            element.classList.add('main');
            element.innerHTML=`<div class="container">
                                    <h2 class="main_title">Catalog</h2>
                                    <div class="main_wrapper">
                                        <ul class="main_items"></ul>
                                    </div>
                                </div>`
            
            return element
        };

        this.init = () => {
            return this.create()
        }
    }
}

const main = new Main().init()
export default main