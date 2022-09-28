class Cart {
    constructor () {

        this.cart = [];

        this.create = () => {
            const element = document.createElement('div');
            element.classList.add('cart')

            if(this.cart.length === 0) {
                element.innerHTML = `<h2>Корзина пуста</h2>`
            } else {
                let cartElement = '';
                this.cart.forEach(({title, price, id, count}, index) => {
                    cartElement += `<div class="cart_item">
                                        <p>${index+1} ${title} - кол: ${count}, стоимость - ${price*count} $</p>
                                    </div>`
                });
                element.innerHTML = cartElement
                console.log(element)
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
console.log(new Cart())

export default cart