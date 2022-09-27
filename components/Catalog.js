class Catalog {
    constructor() {
        this.catalogData = [];

        this.getCatalogData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            return data
        };

        this.create = async () => {
            if(this.catalogData.length === 0) {
                this.catalogData = await this.getCatalogData();
                
            };
            const element = document.createElement('div');

            let li='';
                this.catalogData.forEach(({id, image, price, title})=>{
                    li+= `<li class="main_item" id="${id}">
                            <div class="item_card">
                                <div class="main_img">
                                    <img src="${image}">
                                </div>
                                <div class="main_item_info">
                                    <p class="title">${title}</p>
                                </div>
                                <div class="main_item_buttons">
                                    <p class="price">${price} $</p>
                                    <button class="btn btn_add" id=${id}>Добавить</button
                                </div>
                            </div>
                            
                        </li>
                        `
                });
 
            element.classList.add('catalog_wrapper')
            element.innerHTML = `<div class="container">
                                    <div class="main_wrapper">
                                        <ul class="main_items">
                                            ${li}
                                        </ul>
                                    </div>
                                </div>`
            return element
        }

        this.init = () => {
            return this.create()
        };
    }
    
}

const catalog = new Catalog().init()

export default catalog