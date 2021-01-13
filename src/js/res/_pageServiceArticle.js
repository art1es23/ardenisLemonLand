import gsap from 'gsap';

const pageServiceArticle = (container) => {
    const header = container.querySelector('.header');
    const servicesArticle = container.querySelector('.services-content--wrapper');

    const socialMenu = container.querySelector('.social-menu--aside');
    const footer = container.querySelector('.footer');


    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

    tl
        .fromTo(container, 3, {
            yPercent: -100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1
        })
        .fromTo(header, {
            yPercent: -100
        }, {
            yPercent: 0
        })
        .fromTo(servicesArticle, {
            opacity: 0
        }, {
            opacity: 1
        })
        .fromTo(socialMenu, {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1
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

export default pageServiceArticle;