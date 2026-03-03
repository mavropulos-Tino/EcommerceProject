import {fetchProductById} from '../services/apiService.js';
import {renderProductPage} from '../utilities/renderer.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const product = await fetchProductById(id);
renderProductPage(product);