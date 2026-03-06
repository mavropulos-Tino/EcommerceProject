import {state} from '../state.js';
import {loadShop} from '../handlers/shopLoader.js';
import {renderPaginationPrevious, renderPaginationButtons, renderPaginationNext} from '../services/renderService.js';
import {applyActiveState, togglePrevNextState} from '../utils/paginationUtils.js';

export const updatePagination = () => {
    const container = document.querySelector('.pagination-wrap');
    container.innerHTML = '';

    const totalPages = Math.ceil(state.totalProducts/state.limit);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('pagination');

    ul.appendChild(renderPaginationPrevious(loadShop));
    for (let i=1; i<=totalPages; i++) {
        ul.appendChild(renderPaginationButtons(i, loadShop));
    }
    ul.appendChild(renderPaginationNext(totalPages, loadShop));

    nav.appendChild(ul);
    container.appendChild(nav);

    applyActiveState(ul, state.currentPage);
    togglePrevNextState(ul, state.currentPage, totalPages);
};