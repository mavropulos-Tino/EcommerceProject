import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/components/navbarStyles.css';
import '../styles/components/footerStyles.css';

import '../styles/pageStyles/shopStyles.css';

import {loadShop} from './handlers/shopLoader.js'

import {fetchCategories} from './services/apiService.js';
import {renderFilterCategories} from './services/renderService.js';

import './services/searchService.js';
import './services/sortService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const categories = await fetchCategories();
    renderFilterCategories(categories);

    loadShop();
});