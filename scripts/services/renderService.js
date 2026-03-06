export const renderProducts = product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img class="card-thumbnail" src="${product.thumbnail}" alt="${product.name}" />
        <div class="card-body">
            <span class="card-brand">${product.category}</span>
            <p class="card-title">${product.name}</p>
            <div class="card-rating">
                <span class="card-rating-score">${product.rating}</span>
                <span>(${product.reviews.length} reviews)</span>
            </div>
            <p class="card-price">$${product.price}</p>
            <div class="card-btn">
                <button type="button" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;

    document.querySelector('.product-grid').appendChild(card);
};

// Pagination Rendering
import {state} from '../state.js';
export const renderPaginationPrevious = loadShop => {
    const previous = document.createElement('li');
    previous.classList.add('page-item', 'buttonPrevious');
    previous.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    previous.addEventListener('click', () => {
        if(state.currentPage<=1) {
            return;
        }
        state.currentPage--;
        loadShop();
        setTimeout(() => { window.location.hash = '#shop'; }, 0);
    });
    return previous;
}
export const renderPaginationButtons = (index, loadShop) => {
    const button = document.createElement('li');
    button.classList.add('page-item', 'pageButton');
    button.id = index;
    button.innerHTML = `<a class="page-link" href="#">${index}</a>`;
    button.addEventListener('click', () => {
        if(state.currentPage===index) {
            return;
        }
        state.currentPage = index;
        loadShop();
        setTimeout(() => { window.location.hash = '#shop'; }, 0);
    });
    return button;
}
export const renderPaginationNext = (totalPages, loadShop) => {
    const next = document.createElement('li');
    next.classList.add('page-item', 'buttonNext');
    next.innerHTML = `<a class="page-link" href="#">Next</a>`;
    next.addEventListener('click', () => {
        if(state.currentPage>=totalPages) {
            return;
        }
        state.currentPage++;
        loadShop();
        setTimeout(() => { window.location.hash = '#shop'; }, 0);
    });
    return next;
}

// Filter Categories Options Rendering
import {loadShop} from '../handlers/shopLoader.js';
export const renderFilterCategories = categories => {
    const container = document.getElementById('category');

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.slug;
        option.text = category.name;
        container.appendChild(option);
    });

    container.addEventListener('change', event => {
        state.activeCategory = event.target.value;

        if(event.target.value === 'all') {
            state.activeCategory = null;
        }
        loadShop();
    });
}