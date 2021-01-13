const filter = (page) => {
    console.log('FILTER');

    let getElement = (c) => page.querySelectorAll(c);

    const filterTriggers = getElement('.tabs-triggers__item');
    const filterBox = getElement('.blog-box__item') || getElement('.project--filter');

    console.log(getElement('.project--filter').length);

    console.log(getElement('.blog-box__item').length);
    filterTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            let filterData = e.target.dataset.filter;
            console.log(filterData);

            filterBox.forEach(element => {
                element.classList.remove('hide');
                if (!element.classList.contains(filterData) && filterData !== "all") {
                    element.classList.add('hide');
                }
            });

        });

    });


}

export default filter;