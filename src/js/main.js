const s = document.querySelectorAll('.section');

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    console.log(e);
    e = e || window.event;

    let target = e.target;
    let delta = e.deltaY || e.detail;

    if (delta === 3) {
        for (let i = 0; i <= s.length; i++) {
            /*let info = s[i].style.transform;
            let x = info.match(/matrix\((?:\d+, ?){4}(\d+)/);
            console.log('SHOTO', info);
            console.log('sdas', x);*/
            let info = window.getComputedStyle(s[i]).transform;
            console.log(info);
            let x = info.match(/matrix\((?:\d+, ?){4}(\d+)/);
            console.log('some: ', x);
            s[i].style.transform = `rotateZ(${60 * i + 60}deg)`;
        }
    } else if (delta === -3) {
        for (let i = 0; i <= s.length; i++) {
            s[i].style.transform = `rotateZ(${60 * i - 60}deg)`;
        }
    }
})

for (let i = 0; i <= s.length; i++) {
    s[i].style.transform = `rotateZ(${60 * i}deg)`;
}

/*s.forEach(item => {
    if (onwheel.target === item) {
        item.classList.add('section--active')
    } else {
        item.classList.remove('section--active')
    }
})*/