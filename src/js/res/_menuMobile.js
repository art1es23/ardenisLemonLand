const menuMobile = (page) => {

    const header = page.querySelector('.header');
    const nav = header.querySelector('.navigation__wrapper');
    const menuBtn = header.querySelector('.menu');

    document.body.classList.remove('scroll--hidden');

    // document.body.addEventListener('scroll', (evt) => {
    //     evt.preventDefault();
    //     console.log(evt.pageYOffset);
    // });


    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle('navigation__wrapper--open');
        menuBtn.classList.toggle('menu--toggle');
        header.classList.toggle('header--color');
        document.body.classList.toggle('scroll--hidden');

    });


    // const menuLink = header.querySelector('navigation__link');

    // menuLink.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     console.log('OPEN LINK');
    // });


};

export default menuMobile;