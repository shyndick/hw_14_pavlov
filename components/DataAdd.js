
class DataAdd{
    constructor() {
        this.localData = JSON.parse(localStorage.getItem('data'))
        console.log(this.localData)
        this.create=()=>{
            const ul = document.querySelector('.main_items');
            console.log(ul)
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
            ul.innerHTML=li;
            return ul
        }
        this.init=()=>{
            return this.create()
        }
    }
}
const dataAdd = new DataAdd().init()
export default dataAdd
