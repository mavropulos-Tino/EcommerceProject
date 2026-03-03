import {createProductCard} from '../schemas/shopCardSchema.js';

export const renderProductCards = products => {
    const container = document.getElementById('product-grid');
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

export const renderProductPage = product => {
    document.getElementById('product-thumbnail').src = product.thumbnail;
    document.getElementById('product-thumbnail').alt = product.title;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-rating').textContent = product.rating;
    document.getElementById('product-availability').textContent = product.availabilityStatus;
    document.getElementById('product-return-policy').textContent = product.returnPolicy;
    document.getElementById('product-weight').textContent = `${product.weight}g`;

    document.getElementById('product-dimensions').textContent = 
        `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`;

    // document.getElementById('product-tags').innerHTML = 
    //     product.tags.map(tag => `<span>${tag}</span> `).join('');

    // document.getElementById('product-reviews').innerHTML = 
    //     product.reviews.map(review => `
    //         <div>
    //             <p>${review.reviewerName}</p>
    //             <p>${review.rating}</p>
    //             <p>${review.comment}</p>
    //         </div>
    //     `).join('');
}