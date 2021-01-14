import anime from 'animejs';

const slider = () => {


    class Slider {
        constructor(props) {
            this.rootElement = props.element;
            this.slides = Array.from(
                this.rootElement.querySelectorAll(".section")
            );
            this.slidesLength = this.slides.length;
            this.current = 0;
            this.isAnimating = false;
            this.direction = 1; // -1
            this.baseAnimeSettings = {
                rotation: 45,
                duration: 750,
                easing: 'easeInOutCirc'
            };
            this.baseAnimeSettingsBack = {
                rotation: 45,
                duration: 1850,
                elasticity: function (el, i, l) {
                    return (200 + i * 200);
                }
            };
            this.baseAnimeSettingsFront = {
                rotation: 45,
                duration: 2250,
                elasticity: function (el, i, l) {
                    return (200 + i * 200);
                }
            };
            this.baseAnimeSettingsTitle = {
                rotation: 45,
                duration: 1750,
                elasticity: function (el, i, l) {
                    return (200 + i * 200);
                }
            };

            this.slides[this.current].classList.add("section--active");

            this._bindEvents();
        }

        goTo(index, dir) {
            if (this.isAnimating) return;
            var self = this;
            let prevSlide = this.slides[this.current];
            let nextSlide = this.slides[index];

            self.isAnimating = true;
            self.current = index;
            nextSlide.classList.add("section--active");

            anime(Object.assign({}, self.baseAnimeSettings, {
                targets: nextSlide,
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettingsBack, {
                targets: nextSlide.querySelectorAll('.section1'),
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettingsFront, {
                targets: nextSlide.querySelectorAll('.section2'),
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: nextSlide.querySelectorAll('.section3'),
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: nextSlide.querySelectorAll('.section4'),
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: nextSlide.querySelectorAll('.section5'),
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: nextSlide.querySelectorAll('.section6'),
                rotate: [90 * dir + 'deg', 0],
                translateX: [90 * dir + '%', 0]
            }));

            anime(Object.assign({}, self.baseAnimeSettings, {
                targets: prevSlide,
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%'],
                complete: function (anim) {
                    self.isAnimating = false;
                    prevSlide.classList.remove("section--active");
                    self.thumbs.forEach((item, index) => {
                        var action = index === self.current ? "add" : "remove";
                    });
                }
            }))

            anime(Object.assign({}, self.baseAnimeSettingsBack, {
                targets: prevSlide.querySelectorAll('.section1'),
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%']
            }));

            anime(Object.assign({}, self.baseAnimeSettingsFront, {
                targets: prevSlide.querySelectorAll('.section2'),
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%']
            }));

            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: prevSlide.querySelectorAll('.section3'),
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%']
            }));

            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: prevSlide.querySelectorAll('.section4'),
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%']
            }));
            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: prevSlide.querySelectorAll('.section5'),
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%']
            }));
            anime(Object.assign({}, self.baseAnimeSettingsTitle, {
                targets: prevSlide.querySelectorAll('.section6'),
                rotate: [0, -90 * dir + 'deg'],
                translateX: [0, -100 * dir + '%']
            }));

        }

        goStep(dir) {
            let index = this.current + dir;
            let len = this.slidesLength;
            let currentIndex = (index + len) % len;
            this.goTo(currentIndex, dir);
        }

        goNext() {
            this.goStep(1);
        }

        goPrev() {
            this.goStep(-1);
        }

        _navClickHandler(e) {
            var self = this;
            if (self.isAnimating) return;
            if (!target) return;
            let index = self.thumbs.indexOf(target);
            if (index === self.current) return;
            let direction = index > self.current ? 1 : -1;
            self.goTo(index, direction);
        }

        _bindEvents() {
            var self = this;
            ["goNext", "goPrev", "_navClickHandler"].forEach(method => {
                self[method] = self[method].bind(self);
            });
            window.addEventListener("wheel", self.goNext);
        }
    }

    // ===== init ======
    let slider = new Slider({
        element: document.querySelector(".section--wrapper")
    });

};

export default slider;