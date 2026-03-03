export const printObj = product => {
    document.getElementById('product-main-image').src = product.images;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-title').textContent = product.title;

    document.getElementById('product-rating-value').textContent = product.rating;
    document.getElementById('product-review-count').textContent = `(${product.reviews.length})`;

    document.getElementById('product-price-detail').textContent = `$${product.price}`;
    document.getElementById('product-return-policy').textContent = product.returnPolicy;

    document.getElementById('product-category').textContent = product.category;

    product.tags.forEach(tag => {
        document.getElementById('product-tags').innerHTML += `<span class="product-tag">${tag}</span>`;
    });

    document.getElementById('product-description').textContent = product.description;

    document.getElementById('spec-value-width').textContent = `${product.dimensions.width} cm`;
    document.getElementById('spec-value-depth').textContent = `${product.dimensions.depth} cm`;
    document.getElementById('spec-value-height').textContent = `${product.dimensions.height} cm`;
    document.getElementById('spec-value-weight').textContent = `${product.weight} g`;

    product.reviews.forEach(review => {
        document.getElementById('reviews-list').innerHTML += `
            <article class="review-card" id="review">
              <div class="review-header">
                <span class="review-author" id="review-author">${review.reviewerName}</span>
                <span class="review-author" id="review-rating">${review.rating}</span>
                <span class="review-time" id="review-time">${review.date.slice(0, 10)}</span>
              </div>
              <p class="review-comment" id="review-comment">${review.comment}</p>
            </article>
        `
    })

    document.getElementById('product-price-purchase').textContent = `$${product.price}`;
    document.getElementById('product-shipping-info').textContent = `${product.shippingInformation}`;
    document.getElementById('product-availability').textContent = `${product.availabilityStatus}`;
    document.getElementById('product-warranty').textContent = `${product.warrantyInformation}`;
}