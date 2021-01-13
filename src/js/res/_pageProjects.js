import gsap from 'gsap';

const pageHome = (container) => {
    const header = container.querySelector();

    const footer = container.querySelector('.footer');


    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
            delay: 0
        },
    });

    tl
        .fromTo(container, {
            xPercent: -25,
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

        .fromTo(footer, {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1
        });

    return tl;


};

export default pageHome;