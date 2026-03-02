import {createProductCard} from '../schemas/shopCardSchema.js';

export const renderProductCards = products => {
    const container = document.getElementById('product-grid');
    // container.innerHTML = '';
    // products.forEach(product => {
    //     container.innerHTML += createProductCard(product);
    // });
    container.innerHTML = products.map(createProductCard).join('');
}
export const renderPaginationButtons = (total, handlePaginationClick) => {
    const totalPages = Math.ceil(total/30);
    const container = document.getElementById('pagination');

    for (let i=0; i<totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('page-btn');
        button.setAttribute('data-page', i);
        button.innerHTML = i+1;

        button.addEventListener('click', handlePaginationClick);
        container.appendChild(button);
    }
}