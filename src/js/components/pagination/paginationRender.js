import {limit} from '../../utils/config.js';
import {updateProductList} from '../../services/shopService.js';

export const pageButtonRenderer = (total, currentPage) => {

    const numberOfPages = Math.ceil(total/limit);


    const container = document.getElementById('pagination-container');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('pagination');

    const previousLi = document.createElement('li');
    previousLi.classList.add('page-item');
    previousLi.innerHTML = `<a class="page-link" href="#"><</a>`;
    previousLi.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateProductList(currentPage);
        }
    });
    ul.appendChild(previousLi);

    for (let i = 1; i <= numberOfPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.dataset.page = i;
        li.addEventListener('click', () => {
            currentPage = i;
            updateProductList(i);
        });
        ul.appendChild(li);
    }

    const nextLi = document.createElement('li');
    nextLi.classList.add('page-item');
    nextLi.innerHTML = `<a class="page-link" href="#">></a>`;
    nextLi.addEventListener('click', () => {
        if (currentPage < numberOfPages) {
            currentPage++;
            updateProductList(currentPage);
        }
    });
    ul.appendChild(nextLi);

    nav.appendChild(ul);
    container.appendChild(nav);
}