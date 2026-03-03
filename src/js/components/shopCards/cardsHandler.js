export const handleProductClick = product => {
    localStorage.setItem("productID", JSON.stringify(product.id));
    window.location.href = "/EcommerceProject/pages/testPage.html";
}

export const handleAddToCart = product => {
    console.log(`Add to cart: ${product.id}`);
}