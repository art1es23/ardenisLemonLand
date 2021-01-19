const sortMenu = (page) => {

    const sortWrapper = page.querySelector('.tabs-triggers');
    const sortBtn = sortWrapper.querySelector('.btn--filter');
    const sortMenuWrapper = sortWrapper.querySelector('.tabs-triggers--wrapper');

    sortBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sortMenuWrapper.classList.toggle('show');
        sortBtn.classList.toggle('rotateBtn');
        sortWrapper.classList.toggle('tabs-triggers--extend');

    });



};

export default sortMenu;