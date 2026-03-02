import {fetchProducts} from '../services/apiService.js';
import {renderProductCards, renderPaginationButtons} from '../utilities/renderer.js';

// const LIMIT = 30;

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