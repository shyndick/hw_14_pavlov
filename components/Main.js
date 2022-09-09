class Main {
    constructor() {
        this.localData = JSON.parse(localStorage.getItem('data'))
        console.log(this.localData)
        this.create = () => {
            const element = document.createElement('main');
            element.classList.add('main');
            let li='';
            this.localData.forEach(({category, id, image, price, title})=>{
                li+= `<li class="main_item" id="${id}">
                        <div class="item_card">
                            <div class="main_img">
                                <img src="${image}">
                            </div>
                            <div class="main_item_info">
                                <p class="category">${category}</p>
                                <p class="title">${title}</p>
                                <p class="price">${price} $</p>
                            </div>
                        </div>
                        <div class="main_item_buttons">
                            <button class="btn btn_add" data-add="${id}">Добавить</button>
                            <button class="btn btn_full" data-full="${id}">Подробнее</button>
                        </div>
                    </li>
                    `
            })
            element.innerHTML=`<div class="container">
                                    <h2 class="main_title">Catalog</h2>
                                    <div class="main_wrapper">
                                        <ul class="main_items">
                                            ${li}
                                        </ul>
                                    </div>
                                </div>`
            
            return element
        };

        // this.add = () => {
        //     const ul = document.querySelector('.main_items');
        //     console.log(ul)
        //     let li='';
        //     this.localData.forEach(({category, id, image, price, title})=>{
        //         li+= `<li class="main_item" id="${id}">
        //                 <div class="item_card">
        //                     <div class="main_img">
        //                         <img src="${image}">
        //                     </div>
        //                     <div class="main_item_info">
        //                         <p class="category">${category}</p>
        //                         <p class="title">${title}</p>
        //                         <p class="price">${price} $</p>
        //                     </div>
        //                 </div>
        //                 <div class="main_item_buttons">
        //                     <button class="btn btn_add" data-add="${id}">Добавить</button>
        //                     <button class="btn btn_full" data-full="${id}">Подробнее</button>
        //                 </div>
        //             </li>
        //             `

        //     })
        //     ul.innerHTML=li;
        //     return ul
        // }
        this.init = () => {
            return this.create()
        }
    }
}

const main = new Main().init()
export default main