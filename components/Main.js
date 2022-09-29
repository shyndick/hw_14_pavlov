import {getSlugOfHash, getPageData, hashChangeEvent} from '../utils/utils.js';
import {CATALOG, CART} from '../constants/constants.js'

class Main {
    constructor() {
        this.element='';

        this.localDataNav = JSON.parse(localStorage.getItem('dataNav'));


        this.create = () => {
            this.element = document.createElement('main');
            this.element.classList.add('main');
            this.render(location.hash)
            hashChangeEvent(this.render)
            
        };

        this.render = (hash) => {
            const slugOfHash = getSlugOfHash(hash)
            if(!hash) {
                location.replace(`${location.pathname}#${slugOfHash}`)
            }
            
            const mainData = getPageData(slugOfHash);
            const {title, content} = mainData;

            this.element.innerHTML=this.getHtmlTemplate(title, content)
            
            if(slugOfHash === CART) {
                import('./Cart.js').then(response => {
                    const cartData = response.default.init()
                    this.element.innerHTML = cartData.outerHTML;
                    
                    const cart_delete_all = this.element.querySelector('.btn_delete_all');
                        this.deleteBtnAll(cart_delete_all)
                    const cart_zakaz_btn = this.element.querySelector('.btn_zakaz');
                        this.deleteBtnAll(cart_zakaz_btn)

                    const cart_delete = this.element.querySelectorAll('.btn_delete');
                    cart_delete.forEach((product) => {
                        product.addEventListener('click', (e) => {
                            this.deleteItemCart(e.target.id)
                            this.render(location.hash)
                        })
                    })
                })
            }

            if(slugOfHash.includes(CATALOG)) {

                if(slugOfHash === CATALOG) {
                    import('./Catalog.js').then(response => {
                        const responseDefault = response.default;
                        responseDefault.then(data => {
                            this.element.innerHTML=this.getHtmlTemplate(title, content, data.outerHTML);

                            const addToCartBtns = this.element.querySelectorAll('.btn_add');
                            addToCartBtns.forEach(btn => {
                                btn.addEventListener('click', (e) => {
                                    this.addToCart(e.target.id)
                                })
                            })
                        })
                    })
                }

                if(slugOfHash.includes('/')) {
                    this.element.innerHTML=`<div class="container">
                                                <div class="gif">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                                </div>
                                            </div>`
                    import ('./Product.js').then(response=>{
                        const product = response.default.init();
                        product.then(productData => {
                            this.element.innerHTML = productData.outerHTML
                            const addProductBtn = this.element.querySelector('.btn_product_add');
                            addProductBtn.addEventListener('click', (e) => {
                                this.addToCart(e.target.id)
                            })
                        })
                    });
                    
                }

            } 
            

            return this.element
        };

        this.cart = JSON.parse(localStorage.getItem('cart')) || [];

        this.addToCart = (idProduct) => {
            const dataCatalog = JSON.parse(localStorage.getItem('catalogData'));
            const product = dataCatalog.find(({id}) => id === +idProduct);
            const arrayIndex = this.cart.findIndex(({id}) => id === +idProduct);
            
            if (arrayIndex !== -1) {
                
                this.cart[arrayIndex].count += 1;
            } else {
                product.count = 1;
                this.cart.push(product)
            }

            localStorage.setItem('cart', JSON.stringify(this.cart))
        }


        this.deleteAll = () => {
            this.cart = [];
            localStorage.removeItem('cart');
            
        }

        this.deleteBtnAll = (button) => {
                        if(button){
                            button.addEventListener('click', () => {
                                this.deleteAll()
                                
                                // this.element.innerHTML = response.default.init().outerHTML;
                                this.render(location.hash)
                            })
                        }
        }

        this.deleteItemCart = (idProduct) => {
            this.cart = this.cart.filter(item => item.id !== +idProduct);
            localStorage.setItem('cart', JSON.stringify(this.cart))

        }


        this.getHtmlTemplate = (title, content, htmlElement) => {
            return `<div class="main_wrapper">
                        <h1 class="main_title">${title}</h1>
                        <div class="container">
                            ${htmlElement ? htmlElement : ''}
                            <div class="main_content">
                                <p class="content">${content}</p>
                            </div>
                        </div>
                    </div>`
        }


        this.init = () => {
            this.create()
            return this.element
        };
    }
}

const main = new Main().init()
export default main