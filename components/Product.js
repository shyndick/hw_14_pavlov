class Product  {
    constructor () {

        this.getProductData = async (id) => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            return data
        }

        this.create = async (idProduct) => {
            const productData = await this.getProductData(idProduct)

            const element = document.createElement('div');
            const {title, id, image, description, price} = productData
            element.classList.add('product');

            element.innerHTML =`<div class="product_wrapper">
                                    <h1>${title}</h1>
                                    <h3>${price}</h3>
                                    <p>${description}</p>
                                    <img src="${image}" alt="${title}">

                                </div>`
            
            return element
        };

        this.init = () => {
            const idProduct = location.hash.split('/')[1]
            return this.create(idProduct)
        };
    }
}

const product = new Product()
export default product
