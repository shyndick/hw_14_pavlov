class Cart {
    constructor () {

        this.cart = [];

        this.create = () => {
            const element = document.createElement('div');
            element.classList.add('cart')
            let priceAll = 0;
            let countAll = 0;

            if(this.cart.length === 0) {
                element.innerHTML = `<div class="container">
                                        <div class="cart_null">
                                            <h2>Корзина пуста</h2>
                                        </div>
                                    </div>`
            } else {
                
                let cartElementTr = '';
                this.cart.forEach(({title, price, id, count, image}, index) => {
                    cartElementTr += `
                                        <tr>
                                            <td class="table_img"><img src="${image}"></td>
                                            <td class="table_index">${index+1}</td>
                                            <td class="table_title">${title}</td>
                                            <td class="table_count">${count}</td>
                                            <td class="table_price">${price*count} $</td>
                                            <td>
                                                <button class="btn btn_delete" id="${id}">Удалить<button>
                                            </td>
                                        </tr>
                                    </div>
                                            `
                priceAll+=price*count;
                countAll+=count
                });
                let cartElement = `<div class="container">
                                        <div class="cart_item">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td></td>
                                                        <td class="thead_index">Позиция</td>
                                                        <td class="thead_title">Товар</td>
                                                        <td class="thead_count">Количество</td>
                                                        <td class="thead_price">Стоимость</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody>${cartElementTr}</tbody>
                                                <tfoot>
                                                    <td></td>
                                                    <td></td>
                                                    <td><button class="btn btn_zakaz">Заказать<button></td>
                                                    <td class="thead_count">${countAll}</td>
                                                    <td class="thead_price">${priceAll} $</td>
                                                    <td><button class="btn btn_delete_all">Очистить корзину<button></td>
                                                </tfoot>
                                                </table>
                                            </div>
                                        </div>`;
                element.innerHTML = cartElement
            }
            return element
        }

        


        this.init = () => {
            this.cart = JSON.parse(localStorage.getItem('cart')) || [];
            return this.create()
        }
    }
}

const cart = new Cart()

export default cart