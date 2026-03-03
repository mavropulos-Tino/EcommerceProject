import {handleProductClick, handleAddToCart} from './cardsHandler.js';

const createProductCard = product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.id = product.id;
    card.innerHTML = `
        <div class="card-img-wrap">
            <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" />
        </div>
        <div class="card-info">
            <div class="card-title">${product.title}</div>
            <div class="card-category">${product.category}</div>
            <div class="card-rating">
                <i class="bi bi-star-fill text-warning"></i>
                <span class="ms-1">${product.rating} (${product.reviews.length})</span>
            </div>
        </div>
        <div class="card-actions">
            <div class="card-price">$${product.price}</div>
            <button class="btn-add"><i class="bi bi-bag-plus me-1"></i>Add to Cart</button>
        </div>
    `;
    card.querySelector('.card-title').addEventListener('click', () => handleProductClick(product));
    card.querySelector('.card-img-wrap img').addEventListener('click', () => handleProductClick(product));
    
    card.querySelector('.btn-add').addEventListener('click', () => handleAddToCart(product));
    return card;
}

export const renderProductCards = products => {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    products.forEach(product => container.appendChild(createProductCard(product)));
}