import {loadShop} from '../handlers/shopLoader';
import {state} from '../state.js';

const sortSelector = document.getElementById('sort');

sortSelector.addEventListener('change', event => {

    if(event.target.value === 'noSortType') {
        state.sortType = null;
        state.sortOrder = null;
        loadShop();
        return;
    }

    const [sortType, sortOrder] = event.target.value.split('-');
    state.sortType = sortType;
    state.sortOrder = sortOrder;
    loadShop();
})