gsap.registerPlugin(ScrollTrigger);

/*ANIMATION AFTER LOADING */
gsap.from('.landing p,h1', {
    opacity: 0, scale:0.95, y:'+0.0em', duration: 0.5, stagger: 0.2
});



/*ANIMATION EXIT LANDING */
gsap.to('.landing', {
    opacity: 0, y: '-4em',
    scrollTrigger: {
        trigger: '.landing',
        start: 'end 20%',
        end: '',
        scrub: 1,
        toggleActions: 'restart reset'
    }
});

/*ANIMATION WORK TITLE */
gsap.from('.title-container', {
    scale: 3, y: '+2em',
    scrollTrigger: {
        trigger: '.title-container',
        start: 'top 50%',
        end: 'top',
        scrub: 1,
        toggleActions: 'restart reset'
    }
});

gsap.to('.action-container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.action-container',
        start: 'top 35%',
        end: 'top',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});

/*ANIMATION PROJECT */
gsap.from('.project-image', {
    y: '+4em', opacity: 0,
    scrollTrigger: {
        trigger: '.project-container',
        start: 'top 55%',
        end: 'top 45%',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});

gsap.from('.project-description', {
    opacity: 0, y: '+8em',
    scrollTrigger: {
        trigger: '.project-container',
        start: 'top 55%',
        end: 'top 40%',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});

gsap.from('.points', {
    opacity: 0, y: '+4em',
    scrollTrigger: {
        trigger: '.points',
        start: 'top 90%',
        end: 'top 80%',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});


/*ANIMATION ABOUT ME */
gsap.from('.about-container', {
    y: '-16em', x: '8em', rotate: '90deg', scale: 1.5,
    scrollTrigger: {
        trigger: '#about',
        start: 'top 60%',
        end: 'top 50%',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});
gsap.from('.about-text', {
    opacity: 0, y: '+8em',
    scrollTrigger: {
        trigger: '#about',
        start: 'top 60%',
        end: 'top 50%',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});


/*CONTACT SECTION */
gsap.from('#contact', {
    opacity: 0, x: '-8em',
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 90%',
        end: 'top 70%',
        markers: false,
        scrub: 1,
        toggleActions: 'restart reset'
    }
});

