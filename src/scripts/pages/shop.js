import {fetchProducts} from '../services/apiService.js';
import {renderProductCards, renderPaginationButtons} from '../utilities/renderer.js';

let productsArray = [];
let currentPage = 0;
let totalProducts = 0;

const handlePaginationClick = async event => {
    currentPage = parseInt(event.target.dataset.page);
    const {products} = await fetchProducts(currentPage);
    productsArray = products;

    renderProductCards(productsArray);
}

export const initializeShop = async () => {
    const {products, total} = await fetchProducts(currentPage);
    productsArray = products;
    totalProducts = total;

    renderProductCards(productsArray);
    renderPaginationButtons(totalProducts, handlePaginationClick);
}

document.getElementById('product-grid').addEventListener('click', event => {
    const card = event.target.closest('.product-card');
    if(card) {
        const id = card.dataset.id;
        window.location.href = `/EcommerceProject/pages/productPage.html?id=${id}`;
    }
});