const filter = (page) => {

    let getElement = (c) => page.querySelectorAll(c);

    const filterTriggers = getElement('.tabs-triggers__item');
    const filterBox = getElement('.blog-box__item') || getElement('.project--filter');
    const countNumber = page.querySelector('.filter-number');
    const title = page.querySelector('.services__title');

    let countItems = filterBox.length;

    countNumber.innerHTML = `${countItems}`;

    filterTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            let filterData = e.target.dataset.filterId;

            title.innerHTML = `${filterData}`;

            let count = 0;
            filterBox.forEach(element => {

                let arr = element.dataset.filter;
                let subArr = arr.split(' ');

                element.classList.remove('hide');
                if (!(subArr.indexOf(filterData) !== -1) && filterData !== "Всі") {
                    element.classList.add('hide');
                }

                if (!element.classList.contains('hide')) {
                    count++;
                }

            });

            countNumber.innerHTML = `${count}`;

        });

    });


}

export default filter;