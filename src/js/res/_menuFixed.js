const menuFixed = (page) => {
    const header = page.querySellector('.header');

    window.addEventListener('scroll', e => {
        let scroll = e.pageYOffset;
        let headerHeight = header.clientHeight;

        if (scroll => headerHeight) {
            header.classlist.add('header--fixed');
        } else {
            header.classlist.remove('header--fixed');
        }

    });

};

export default menuFixed;