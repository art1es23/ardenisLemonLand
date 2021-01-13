import gsap from 'gsap';

const wheelMainPage = () => {
    console.log("IM WHEEL SPINNER");
    let s = document.querySelectorAll('.section');
    let delay = false;

    let rotateDeg = 360 / s.length;

    window.addEventListener('wheel', e => {
        e.preventDefault();
        e = e || window.event;
        let s = document.querySelectorAll('.section');

        if (delay) return;
        delay = true;
        setTimeout(function () {
            delay = false
        }, 1000);

        console.log(rotateDeg);

        let delta = e.deltaY || e.detail;

        for (let i = 0; i <= s.length; i++) {
            let rotateAngle = s[i].style.transform;

            if (delta < 0) {

                for (let j = i; j <= s.length; j++) {
                    e.preventDefault();

                    let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
                    s[i].style.transform = `rotateZ(${joinArr - rotateDeg}deg)`;
                }
            } else {
                for (let j = i; j <= s.length; j++) {
                    e.preventDefault();
                    let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));

                    s[i].style.transform = `rotateZ(${joinArr + rotateDeg}deg)`;
                }
            }
            e.stopPropagation();

            if (s[i].style.transform === 'rotateZ(0deg)' || s[i].style.transform === 'rotateZ(360deg)') {
                s[i].classList.add('section--active');
            } else {
                s[i].classList.remove('section--active');
            }
        }
    })

    for (let i = 0; i <= s.length; i++) {
        s[i].style.transform = `rotateZ(${i * rotateDeg}deg)`;
    }

}

export default wheelMainPage;