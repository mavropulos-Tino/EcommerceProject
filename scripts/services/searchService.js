import {loadShop} from '../handlers/shopLoader';
import {state, resetShopState} from '../state.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    if(!searchInput.value) {
        return;
    }
    const searchTerm = searchInput.value.toLowerCase().trim();
    if(state.searchTerm === searchTerm) {
        return;
    }
    state.searchTerm = searchTerm;
    loadShop();
});

document.getElementById('clearSearch')
.addEventListener('click', () => {
    if(searchInput.value === '') {
        return;
    }

    searchInput.value = '';
    state.searchTerm = '';
    resetShopState();
    loadShop();
});