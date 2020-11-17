

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

@for $i from 1 through 6
  @each $color in $colors
    .section#{$i}
      z-index: 2
      transform: rotateZ($angle * ($i - 1))
      background-color: rgba($color, 0.5)


*/
let s = document.querySelectorAll('.section');


window.addEventListener('wheel', e => {
    e.preventDefault();
    e = e || window.event;
    let delta = e.deltaY || e.detail;

    let s = document.querySelectorAll('.section');
    s.forEach(item => {



        /*        item.addEventListener('mouseenter', evt => {

                    console.log('TARGET: ', evt.target);
                    if (evt.target === item) {
                        item.classList.add('section--active')
                    } else if (evt.target !== item) {
                        item.classList.remove('section--active')
                    }
                })*/
    });

    for (let i = 0; i <= s.length; i++) {
/*
        let info = window.getComputedStyle(s[i], null);
        let tr = info.getPropertyValue("transform") ||
            info.getPropertyValue("-o-transform") ||
            info.getPropertyValue("-webkit-transform") ||
            info.getPropertyValue("-moz-transform") ||
            info.getPropertyValue("-ms-transform");

        console.log(`MATRIX ${i}`, tr);

        let x = tr.match(/matrix\((?:\d+, ?){4}(\d+)/);
        console.log('some: ', x);
        let values = tr.split('(')[1].split(')')[0].split(',');
        let a = values[0];
        let b = values[1];

        // next line works for 30deg but not 130deg (returns 50);
        // let angle = Math.round(Math.asin(sin) * (180/Math.PI));
        let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

        console.log('Rotate: ' + angle);
*/

        let rotateAngle = s[i].style.transform;

/*
        console.log("NOT CHANGE: ", rotateAngle);
*/
        if (delta > 0) {
            for (let j = i; j <= s.length; j++) {

                let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
/*
                console.log(`${i} CHANGE`, joinArr);
*/

                s[i].style.transform = `rotateZ(${joinArr + 60}deg)`;

            }
        } else if (delta < 0) {
            for (let j = i; j <= s.length; j++) {

                let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
/*
                console.log(`${i} CHANGE`, joinArr);
*/

                s[i].style.transform = `rotateZ(${joinArr - 60}deg)`;

            }
        }
        e.stopPropagation();
        if (s[i].style.transform === 'rotateZ(0deg)' || s[i].style.transform === 'rotateZ(360deg)') {
            s[i].classList.add('section--active')
        } else {
            s[i].classList.remove('section--active')
        }

    }
})

for (let i = 0; i <= s.length; i++) {
    s[i].style.transform = `rotateZ(${i * 60}deg)`;
    console.log(s[i].style.transform);
}

