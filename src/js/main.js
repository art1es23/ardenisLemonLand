import barba from '@barba/core';
import gsap from "gsap";

import {
    pageHome,
    pageServices,
    pageAbout,
    pageBlog,
    pageServiceArticle,
    pageServicesToServices
} from './res';
import {
    wheelMainPage,
    tabsToggle,
    modalOrder
} from './res';

const pageTransition = () => {
    let tl = gsap.timeline();

    tl.to('.transition li', {
        duration: 0.2,
        scaleY: 1,
        stagger: 0.15,
        ease: "Expo.easeInOut"
    });
    tl.to('.transition li', {
        duration: 0.2,
        scaleY: 0,
        stagger: 0.05,
        delay: 0.02,
        ease: "Expo.easeInOut"
    });
};

barba.hooks.beforeEnter(data => {
    let nextTarget = data.next.container;
});

barba.hooks.once(data => {
    let nextTarget = data.next.container;
});

barba.init({
    transitions: [{
            name: 'pageHome',
            to: {
                namespace: ['home']
            },
            enter({
                current,
                next
            }) {
                pageHome(next.container);
            },
            once({
                current,
                next
            }) {
                pageHome(next.container);
            },
            leave({
                current,
                next
            }) {
                pageTransition();

                return gsap.to(current.container, {
                    xPercent: -100,
                    opacity: 0,
                    duration: 1
                });
            },
        },
        {
            name: 'pageServicesFromOther',
            to: {
                namespace: ['services']
            },
            enter({
                current,
                next
            }) {
                pageServices(next.container);
            },
            once({
                current,
                next
            }) {
                pageServices(next.container);
            },
            leave({
                current,
                next
            }) {
                pageTransition();

                return gsap.to(current.container, {
                    xPercent: -100,
                    opacity: 0,
                    duration: 1
                });
            },
        },
        {
            name: 'pageServices',
            from: {
                namespace: ['services']
            },
            to: {
                namespace: ['services']
            },
            enter({
                current,
                next
            }) {
                pageServicesToServices(next.container);
            },
            once({
                current,
                next
            }) {
                pageServicesToServices(next.container);
            },
            leave({
                current,
                next
            }) {},
        },
        {
            name: 'pageAbout',
            to: {
                namespace: ['about', 'contacts']
            },
            enter({
                current,
                next
            }) {
                pageAbout(next.container);
            },
            once({
                current,
                next
            }) {
                pageAbout(next.container);
            },
            leave({
                current,
                next
            }) {
                pageTransition();

                return gsap.to(current.container, {
                    opacity: 0,
                    duration: 1
                });
            },
        },
        {
            name: 'pageBlog',
            to: {
                namespace: ['blog', 'projects']
            },
            enter({
                current,
                next
            }) {
                pageBlog(next.container);
            },
            once({
                current,
                next
            }) {
                pageBlog(next.container);
            },
            leave({
                current,
                next
            }) {
                pageTransition();

                return gsap.to(current.container, {
                    xPercent: -100,
                    opacity: 0,
                    duration: 1
                });
            },
        },
        {
            name: 'pageServiceArticle',
            to: {
                namespace: ['services-article']
            },
            enter({
                current,
                next
            }) {
                pageServiceArticle(next.container);
            },
            once({
                current,
                next
            }) {
                pageServiceArticle(next.container);
            },
            leave({
                current,
                next
            }) {
                pageTransition();

                return gsap.to(current.container, {
                    xPercent: -100,
                    opacity: 0,
                    duration: 1
                });
            },
        },
    ],
});