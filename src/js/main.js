import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../css/product.css';

import {URL} from '../js/utils/config.js';
import {fetchData} from '../js/api/apiService.js';
import {pageButtonRenderer} from '../js/components/pagination/paginationRender.js';
import {updateProductList} from './services/shopService.js';

let currentPage = 1;

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData(URL);
    pageButtonRenderer(data.total, currentPage);

    updateProductList(currentPage);
});