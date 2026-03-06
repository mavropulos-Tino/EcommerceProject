import {fetchProducts} from '../services/apiService.js';
import {mapProducts} from '../services/mapService.js';
import {renderProducts} from '../services/renderService.js';
import {updatePagination} from '../services/pagiantionService.js';

import {state, resetViewPort} from '../state.js';

export const loadShop = async () => {
    const data = await fetchProducts();
    state.totalProducts = data.total;
    const objectArray = mapProducts(data.products);

    resetViewPort();

    objectArray.forEach(object => renderProducts(object));
    updatePagination();
}