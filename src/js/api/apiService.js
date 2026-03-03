export const fetchData = async URL => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

export const fetchProducts = async URL => {
    const data = await fetchData(URL);
    return data.products;
}

export const fetchProduct = async URL => {
    const data = await fetchData(URL);
    return data;
}