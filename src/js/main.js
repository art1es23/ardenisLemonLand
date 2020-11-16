let s = document.querySelectorAll('.section');

/*
for (let i = 0; i <= s.length; i++) {
    s[i].style.transform = `rotateZ(${60 * i}deg)`;
}
*/

/*
window.addEventListener('wheel', e => {

    e.preventDefault();
    console.log(e);
    e = e || window.event;

    let delta = e.deltaY || e.detail;

    console.log(delta);

    if (delta === 3) {

        for (let i = 1; i <= s.length; i++) {
            let rotateAngle = s[i].style.transform;
            s[i].style.transform = `rotateZ(${rotateAngle} - 60)`;
            console.log('3: ', s[i].style.transform)
        }
    } else if (delta === -3) {

        for (let i = 1; i <= s.length; i++) {
            s[i].style.transform = '+60deg';
            console.log('-3:', s[i].style.transform)
        }
    }

})
*/

/*
let info = window.getComputedStyle(s, null);
console.log('sadas: ', info);
let tr = info.getPropertyValue("transform") ||
    info.getPropertyValue("-o-transform") ||
    info.getPropertyValue("-webkit-transform") ||
    info.getPropertyValue("-moz-transform") ||
    info.getPropertyValue("-ms-transform");

console.log('MATRIX', tr);

let x = tr.match(/matrix\((?:\d+, ?){4}(\d+)/);
console.log('some: ', x);
let values = tr.split('(')[1].split(')')[0].split(',');
let a = values[0];
let b = values[1];

// next line works for 30deg but not 130deg (returns 50);
// let angle = Math.round(Math.asin(sin) * (180/Math.PI));
let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

console.log('Rotate: ' + angle + 'deg');
*/

for (let i = 0; i <= s.length; i++) {
    let info = window.getComputedStyle(s[i], null);
    console.log(`${i}: `, info);
    let tr = info.getPropertyValue("transform") ||
        info.getPropertyValue("-o-transform") ||
        info.getPropertyValue("-webkit-transform") ||
        info.getPropertyValue("-moz-transform") ||
        info.getPropertyValue("-ms-transform");

    console.log('MATRIX', tr);

    let x = tr.match(/matrix\((?:\d+, ?){4}(\d+)/);
    console.log('some: ', x);
    let values = tr.split('(')[1].split(')')[0].split(',');
    let a = values[0];
    let b = values[1];

    // next line works for 30deg but not 130deg (returns 50);
    // let angle = Math.round(Math.asin(sin) * (180/Math.PI));
    let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

    console.log('Rotate: ' + angle);

    window.addEventListener('wheel', e => {
        e.preventDefault();
        e = e || window.event;

        /*if (s[i] === e.target) {
            s[i].style.cssText = `
            z-index: 5;
            background-color: red`;
        }
*/
        let delta = e.deltaY || e.detail;
        console.log(delta);

        let rotateAngle;
        if (delta === 3) {
            for (; i <= s.length; i++){
                s[i].style.transform = `rotateZ(${angle + 60}deg)`;
                rotateAngle = s[i].style.transform;
                console.log(s[i].style.transform);
            }
        } else if (delta === -3) {
            for (; i <= s.length; i++){
                s[i].style.transform = `rotateZ(${angle - 60}deg)`;
                console.log(s[i].style.transform);
            }
        }

    })

}

/*            let results = info.match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/)
                        console.log('res: ', results)*/


/*

      transform: rotateZ($angle * ($i - 1))
window.addEventListener('wheel', (e) => {
    e.preventDefault();
    console.log(e);
    e = e || window.event;

    let target = e.target;
    let delta = e.deltaY || e.detail;

    console.log(delta);

    if (delta === 3) {

        for (let i = 1; i <= s.length; i++) {
            let transformRotate = s[i].style.transform;
            console.log(transformRotate);
            s[i].style.transform += transformRotate;
            console.log(`change ${i}`, s[i].style.transform)
        }
    } else if (delta === -3) {
        for (let i = 1; i <= s.length; i++) {
            let transformRotate = s[i].style.transform;
            console.log(transformRotate);
            s[i].style.transform = transformRotate + `rotateZ(${60 * i - 60}deg)`;
            transformRotate = s[i].style.transform;
            console.log(`change ${i}`, transformRotate)
        }
    }
})
*/





/*
document.querySelectorAll('.tabs-triggers__item').forEach((item)  =>
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
)

/!* ---------------- Modal Window Events ------------------*!/

const modalOrder = document.querySelector('.modal-order');
const closeBtn = document.querySelector('.btn--close');

document.querySelectorAll('.btn--order').forEach(item =>
        item.addEventListener('click', e => {
                modalOrder.classList.add('modal-order--active');
                document.body.classList.add('scroll--hidden')
        })
)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modalOrder) {
                modalOrder.classList.remove('modal-order--active');
                document.body.classList.remove('scroll--hidden')
        }
}

closeBtn.addEventListener('click', (e) => {
        if (e.target == closeBtn) {
                modalOrder.classList.remove('modal-order--active');
                document.body.classList.remove('scroll--hidden')
        }
})
*/

