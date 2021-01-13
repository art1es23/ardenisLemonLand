import gsap from 'gsap';
import tabsToggle from './_tabsToggle';

const pageServicesToServices = (container) => {
    const header = container.querySelector('.header');

    const tabsTriggers = container.querySelector('.tabs-triggers');
    const title = container.querySelector('.title--wrapper');
    const boxServiceItem = container.querySelectorAll('.services-box__item');

    const footer = container.querySelector('.footer');

    let count = boxServiceItem.length;
    let countTime = count * 0.1;

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

    tabsToggle();

    tl
        .fromTo(title, {
            opacity: 0,
            yPercent: -50
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(boxServiceItem, {
            opacity: 0,
            yPercent: -25
        }, {
            opacity: 1,
            yPercent: 0,
            ease: 'Elastic.easeOut.config(1, 0.3)',
            stagger: 0.1
        })
        .fromTo(footer, {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1
        }, `"-=${countTime}"`);

    return tl;


};

export default pageServicesToServices;