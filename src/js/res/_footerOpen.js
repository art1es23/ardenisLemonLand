const footerOpen = (page) => {
    const footerWrapper = page.querySelector('.footer--fixed');
    const footerBtn = footerWrapper.querySelector('.btn--footer');
    const footerMenuWrapper = footerWrapper.querySelector('.footer--wrapper--extend');

    footerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        footerMenuWrapper.classList.toggle('show');
        footerBtn.classList.toggle('rotateBtn');

    });

};

export default footerOpen;