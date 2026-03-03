import {URL, limit} from '../utils/config.js'
import {fetchProducts} from '../api/apiService.js';
import {mapProducts} from '../utils/mapProducts.js';
import {renderProductCards} from '../components/shopCards/cardsRender.js';

export const updateProductList = async currentPage => {
    const products = await fetchProducts(`${URL}?limit=${limit}&skip=${limit*(currentPage-1)}`);
    const mappedProducts = mapProducts(products);
    renderProductCards(mappedProducts);
}