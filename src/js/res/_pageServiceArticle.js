import gsap from 'gsap';
import modalOrder from './_modalOrder';
import menuMobile from './_menuMobile';

const pageServiceArticle = (container) => {
    const header = container.querySelector('.header');
    const servicesArticle = container.querySelector('.services-content--wrapper');

    const socialMenu = container.querySelector('.social-menu--aside');
    const otherArticle = container.querySelectorAll('.other-blog-article .blog-box__item');
    const footer = container.querySelector('.footer');


    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

    modalOrder();
    menuMobile(container);

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
        .fromTo(otherArticle, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
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

export default pageServiceArticle;