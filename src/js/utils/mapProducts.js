import {Product} from '../models/Product.js';

export const mapProducts = data => {
    return data.map(product => new Product(product));
}