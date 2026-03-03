import {URL} from '../utils/config.js'
import {fetchProduct} from '../api/apiService.js';
import {ProductPage} from '../models/Product.js';
import {printObj} from '../../js/components/productPage/productPageRendering.js';


document.addEventListener('DOMContentLoaded', async () => {
    const productID = JSON.parse(localStorage.getItem("productID"));
    localStorage.removeItem("productID");
    
    const product = await fetchProduct(`${URL}/${productID}`);
    const mappedProduct = new ProductPage(product);
    
    printObj(mappedProduct);
})