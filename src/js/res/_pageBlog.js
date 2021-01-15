import gsap from 'gsap';
import filter from './_filter';
import modalOrder from './_modalOrder';
import sortMenu from './_sortMenu';

const pageBlog = (container) => {
    const header = container.querySelector('.header');

    const boxProjectItem = container.querySelectorAll('.project');
    const ourProjectTitle = container.querySelector('.our-projects__title');

    const footer = container.querySelector('.footer');

    let count = boxProjectItem.length;
    let countTime = count * 0.1;

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

    modalOrder();
    sortMenu(container);
    filter(container);

    tl
        .fromTo(container, 1, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1
        })
        .fromTo(header, {
            yPercent: -100
        }, {
            yPercent: 0
        })

        .fromTo(ourProjectTitle, {
            opacity: 0,
            yPercent: -50
        }, {
            opacity: 1,
            yPercent: 0
        }, "-=1.25")
        .fromTo(boxProjectItem, {
            opacity: 0,
            yPercent: -25
        }, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.15
        })


        .fromTo(footer, {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1
        });

    return tl;


};

export default pageBlog;