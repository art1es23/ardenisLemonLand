import gsap from 'gsap';

const tabsToggle = () => {
    document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
        item.addEventListener('click', e => {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tabs-triggers__item').forEach(
                (child) => child.classList.remove('tabs-triggers__item--active')
            );
            document.querySelectorAll('.tabs-content__item').forEach(
                (child) => child.classList.remove('tabs-content__item--active')
            );

            item.classList.add('tabs-triggers__item--active');
            document.getElementById(id).classList.add('tabs-content__item--active');
        })
    );
    document.querySelectorAll('.nav-submenu__link').forEach((link) =>
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tabs-triggers__item').forEach(
                (child) => child.classList.remove('tabs-triggers__item--active')
            );
            document.querySelectorAll('.tabs-content__item').forEach(
                (child) => child.classList.remove('tabs-content__item--active')
            );
            /*
                        container.querySelector(id).classList.add('tabs-triggers__item--active');
            */

            document.getElementById(id).classList.add('tabs-content__item--active');
        })
    );

}

export default tabsToggle;