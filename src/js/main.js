import Highway from '@dogstudio/highway';
import {TimelineMax} from "gsap/dist/gsap";

/*function tabsToggle() {
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
}


function eventsModal() {
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
}

tabsToggle();
eventsModal();*/

export class Fade extends Highway.Transition {
    out({from, done}) {
        new TimelineMax({onComplete: done})
            .to(from, 0.5, {opacity: 0});
    }

    in({from, to, done}) {
        from.remove();
        new TimelineMax({onComplete: done})
            .fromTo(to, 0.5, {opacity: 0},{opacity: 1});
    }
}

export class Home extends Highway.Renderer {
    onEnter() { }
    onLeave() { }
    onLeaveCompleted() { }
    onEnterCompleted() {

        function wheelMainPage() {
            let s = document.querySelectorAll('.section');
            
            for (let i = 0; i <= s.length; i++) {
                s[i].style.transform = `rotateZ(${i * 60}deg)`;
            }
        }

        function eventsModal() {
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
        }

        eventsModal();
        wheelMainPage();
    }
}

export class Services extends Highway.Renderer {
    onEnter() { }
    onLeave() { }
    onLeaveCompleted() { }
    onEnterCompleted() {
        console.log('Services');
        function tabsToggle() {
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
        }

        function eventsModal() {
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
        }

        tabsToggle();
        eventsModal();

    }
}
export class Blog extends Highway.Renderer {
    onEnter() { }
    onLeave() { }
    onLeaveCompleted() { }

    onEnterCompleted() {
        console.log('blog')

    }
}
export class About extends Highway.Renderer {
    onEnter() { }
    onLeave() { }
    onLeaveCompleted() { }

    onEnterCompleted() {
        console.log('About')

    }
}
export class Contacts extends Highway.Renderer {
    onEnter() { }
    onLeave() { }
    onLeaveCompleted() { }

    onEnterCompleted() {
        console.log('Contacts')

    }
}

// Call Highway.Core once.
const H = new Highway.Core({
    renderers: {
        home: Home,
        services: Services,
        about: About,
        blog: Services,
        projects: Services,
        contacts: Contacts
    },
    transitions: {
        default: Fade
    }
});


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
