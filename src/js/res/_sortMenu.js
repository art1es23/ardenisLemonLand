const sortMenu = (page) => {

    console.log('asdasdasdasd');
    const sortWrapper = page.querySelector('.tabs-triggers');
    const sortBtn = sortWrapper.querySelector('.btn--filter');
    const sortMenuWrapper = sortWrapper.querySelector('.tabs-triggers--wrapper');

    sortBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('btn open');
        sortMenuWrapper.classList.toggle('show');
        sortBtn.classList.toggle('rotateBtn');
        sortWrapper.classList.toggle('tabs-triggers--extend');

    });



};

export default sortMenu;