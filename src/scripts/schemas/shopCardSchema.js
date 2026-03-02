export const createProductCard = product => {
    return `
        <div class="island product-card" data-id="${product.id}">
            <div class="card-img-wrap">
                <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" />
            </div>
            <div class="card-body">
                <div class="card-title">${product.title}</div>
                <div class="card-price">$${product.price.toFixed(2)}</div>
                <div class="card-rating">
                    <i class="bi bi-star-fill text-warning"></i>
                    <span class="ms-1">${product.rating} (${product.reviews.length})</span>
                </div>
                <button class="btn-add" data-id="${product.id}">
                    <i class="bi bi-bag-plus me-1"></i>Add to Cart
                </button>
            </div>
        </div>
    `;
}