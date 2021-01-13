import gsap from 'gsap';
import modalOrder from './_modalOrder';

const pageAbout = (container) => {
    const header = container.querySelector('.header');
    const aboutWrapper = container.querySelector('.about');
    const aboutTitle = container.querySelector('.about__title');
    const aboutDescription = container.querySelector('.about__description');

    const footer = container.querySelector('.footer');


    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

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
        .fromTo(aboutWrapper, {
            xPercent: 100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1
        })
        .fromTo(aboutTitle, {
            yPercent: -100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1
        })
        .fromTo(aboutDescription, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
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

export default pageAbout;