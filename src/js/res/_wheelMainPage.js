const wheelMainPage = (page) => {
    const s = page.querySelectorAll('.section');
    let delay = false;
    let trfRegExp = /[-0-9.]+(?=deg)/;

    let rotateDeg = 360 / s.length;

    const sectionWheel = e => {
        e.preventDefault();
        e = e || window.event;
        let s = page.querySelectorAll('.section');

        if (delay) return;
        delay = true;
        setTimeout(function () {
            delay = false;
        }, 1250);

        let delta = e.deltaY || e.detail;

        for (let i = 0; i <= s.length; i++) {
            let rotateAngle = s[i].style.transform;

            if (delta > 0) {
                for (let j = i; j <= s.length; j++) {
                    e.preventDefault();
                    let transform = +rotateAngle.match(trfRegExp)[0];
                    // let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
                    s[i].style.transform = `rotateZ(${transform - rotateDeg}deg)`;
                }
            } else {
                for (let j = i; j <= s.length; j++) {
                    // let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
                    e.preventDefault();
                    let transform = +rotateAngle.match(trfRegExp)[0];
                    s[i].style.transform = `rotateZ(${transform + rotateDeg}deg)`;
                }
            }
            e.stopPropagation();
            // if (s[0].style.transform === 'rotateZ(360deg)' || s[0].style.transform === 'rotateZ(-360deg)') {
            //     s.forEach(k => {
            //         let sliderData = k.dataset.slider;
            //         k.style.transform = `rotateZ(${sliderData * rotateDeg}deg)`;
            //     });
            // }

            if (s[i].style.transform === 'rotateZ(0deg)' || s[i].style.transform === 'rotateZ(720deg)' || s[i].style.transform === 'rotateZ(-720deg)' || s[i].style.transform === 'rotateZ(360deg)' || s[i].style.transform === 'rotateZ(-360deg)') {
                s[i].classList.add('section--active');
            } else {
                s[i].classList.remove('section--active');
            }

        }
    };

    page.addEventListener('wheel', sectionWheel);

    let y;

    // const getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event;

    page.addEventListener('touchstart', e => {
        y = e.changedTouches[0].pageY;
    });

    page.addEventListener('touchmove', e => {

        let changesY = e.changedTouches[0].pageY;
        let deltaY = changesY - y;

        if (delay) return;
        delay = true;
        setTimeout(function () {
            delay = false;
        }, 1250);

        for (let i = 0; i < s.length; i++) {
            let rotateAngle = s[i].style.transform;


            if (deltaY < 0) {
                for (let j = i; j <= s.length; j++) {

                    e.preventDefault();
                    let transform = (+rotateAngle.match(trfRegExp)[0]);
                    s[i].style.transform = `rotateZ(${transform - rotateDeg}deg)`;
                }
            } else if (deltaY > 0) {
                for (let j = i; j <= s.length; j++) {

                    e.preventDefault();
                    let transform = +rotateAngle.match(trfRegExp)[0];
                    s[i].style.transform = `rotateZ(${transform + rotateDeg}deg)`;
                }
            }
            e.stopPropagation();

            if (s[i].style.transform === 'rotateZ(0deg)' || s[i].style.transform === 'rotateZ(720deg)' || s[i].style.transform === 'rotateZ(-720deg)' || s[i].style.transform === 'rotateZ(360deg)' || s[i].style.transform === 'rotateZ(-360deg)') {
                s[i].classList.add('section--active');
            } else {
                s[i].classList.remove('section--active');
            }

        }

    });


    s.forEach(element => {
        let sliderData = element.dataset.slider;
        element.style.transform = `rotateZ(${sliderData * rotateDeg}deg)`;
    });

    // for (let i = 0; i <= s.length; i++) {
    //     s[i].style.transform = `rotateZ(${i * rotateDeg}deg)`;
    // }

};

export default wheelMainPage;