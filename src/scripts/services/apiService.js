import {URL} from '../config.js';
import {Product} from '../models/Product.js';

export const fetchProducts = async currentPage => {
    const data = await fetchData(`${URL}/products?limit=30&skip=${currentPage*30}`);
    const productsArray = mapProduct(data.products);
    return {
        products: productsArray, 
        total:    data.total
    };
}

const fetchData = async URL => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const mapProduct = data => {
    let productsArray = [];
    data.forEach(product => {
        const mappedProduct  = new Product(
            product.title, product.thumbnail, product.description,
            product.brand, product.category, product.price,
            product.tags, product.reviews, product.rating,
            product.dimensions, product.weight,
            product.availabilityStatus, product.returnPolicy,
            product.id
        )
        productsArray.push(mappedProduct );
    });
    return productsArray;
}