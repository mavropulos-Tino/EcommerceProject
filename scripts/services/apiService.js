import {state} from '../state.js';
import {BASE_URL} from '../config.js';

export const fetchProducts = async () => {
  const skip = state.limit*(state.currentPage-1);
  let URL = '';

  if(state.activeCategory) {
    URL = `${BASE_URL}/products/category/${state.activeCategory}?limit=${state.limit}&skip=${skip}`;
  } else if(state.searchTerm) {
    URL = `${BASE_URL}/products/search?q=${state.searchTerm}&limit=${state.limit}&skip=${skip}`;
  } else {
    URL = `${BASE_URL}/products?limit=${state.limit}&skip=${skip}`;
  }

  if(state.sortType) {
    URL += `&sortBy=${state.sortType}&order=${state.sortOrder}`;
  }
  
  try {
    const response = await fetch(URL);
    if(!response.ok) {throw new Error(`Response: ${response.status}`)};
    return await response.json();
  } 
  catch (error) {console.error(error.message)};
}

export const fetchCategories = async () => {
  let URL = `${BASE_URL}/products/categories`;

  try {
    const response = await fetch(URL);
    if(!response.ok) {throw new Error(`Response: ${response.status}`)};
    return await response.json();
  }
  catch (error) {console.error(error.message)};
}

export const fetchByCategory = async category => {
  const skip = state.limit*(state.currentPage-1);
  let URL = `${BASE_URL}/products/category/smartphones?limit=${state.limit}&skip=${skip}`;

  try {
    const response = await fetch(URL);
    if(!response.ok) {throw new Error(`Response: ${response.status}`)};
    return await response.json();
  } 
  catch (error) {console.error(error.message)};
}