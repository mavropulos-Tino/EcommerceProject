export const state = {
  currentPage: 1,
  limit: 20,
  totalProducts: 0,
  activeCategory: null,
  searchTerm: '',

  sortType: null,
  sortOrder: null
};

export const resetShopState = () => {
  state.currentPage = 1;
  state.activeCategory = null;
  state.searchTerm = '';

  state.sortType = null;
  state.sortOrder = null;
}

export const resetViewPort = () => {
  document.querySelector('.product-grid').innerHTML ='';
  document.querySelector('.pagination-wrap').innerHTML ='';
}