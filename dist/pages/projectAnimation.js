gsap.registerPlugin(ScrollTrigger);
gsap.from('.cover-container', {
    scale: 0.6, y: '6rem',
    scrollTrigger: {
        trigger: '.cover-container',
        scrub: 1,
        start: 'center bottom',
        end: 'bottom bottom',
    }
});

gsap.to('.title', {
    opacity: 0.5, y: '-4rem',
    scrollTrigger: {
        trigger: '.title',
        scrub: 1,
        start: 'top top',
        end: 'bottom top',
    }
});
