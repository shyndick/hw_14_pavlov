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
            const {title, id, image, description, price, category} = productData
            element.classList.add('product');

            element.innerHTML =`<div class="product_wrapper">
                                    <div class="container">
                                        <div class="product_title">
                                            <h1>${title}</h1>
                                        </div>
                                        <div class="product_title_img_wrapper">   
                                            <div class="product_img">
                                                <img src="${image}" alt="${title}">
                                            </div>
                                            <div class="product_description_all">
                                                <div class="product_description">
                                                    <h3>Категория: ${category}</h3>
                                                    <p>Описание: ${description}</p>
                                                </div>
                                                <div class="product_price_add">
                                                    <h2>${price} $</h2>
                                                    <button class="btn btn_product_add" id="${id}">addProduct</button>
                                                </div>
                                                
                                            </div>
                                        </div>   
                                    </div>
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
