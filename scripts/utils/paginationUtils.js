export function applyActiveState(ul, currentPage) {
    const buttons = ul.querySelectorAll('.pageButton');
    buttons.forEach(button => {
        const link = button.querySelector('.page-link');
        const page = parseInt(button.id);
        if (page===currentPage) {
            button.classList.add('active');
            link.style.pointerEvents = 'none';
        } else {
            button.classList.remove('active');
            link.style.pointerEvents = '';
        }
    });
}

export function togglePrevNextState(ul, currentPage, totalPages) {
    const previous = ul.querySelector('.buttonPrevious');
    const next = ul.querySelector('.buttonNext');

    if(currentPage===1) {
        previous.classList.add('disabled');
    } else {
        previous.classList.remove('disabled');
    }

    if (currentPage===totalPages) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }
}