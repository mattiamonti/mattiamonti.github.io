//ANIMAZIONI LANDING PAGE SCHERMATA PRINCIPALE
gsap.from("#header", { y: -100, opacity: 0, duration: 1 });
gsap.from("#title", { x: -500, opacity: 0, duration: 1 });
gsap.from("#subtitle", { x: -500, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#clicktochat", { opacity: 0, duration: 1.75, delay: 1 });
gsap.from("#clicktolinkedin", { opacity: 0, duration: 1.75, delay: 1.75 });
//animazione dal basso verso l'alto foto profilo
gsap.from("#profilepic", { y: 400, opacity: 0, duration: 0.75, delay: 0.5 });



//ANIMAZIONI PROGETTI CON TIMELINE
const tl = gsap.timeline();

const start_anim_project = "top bottom"
const end_anim_project = "bottom bottom"

document.getElementById("section-title").style.opacity = 0;
tl.to("#section-title", {
    scrollTrigger: {
        trigger: "#project-1",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
    },
    opacity: 1,
    immediateRender: false
});


tl.from("#project-1", {
    scrollTrigger: {
        trigger: "#project-1",
        start: start_anim_project,
        end: end_anim_project,
        scrub: true,
    },
    scale: 0,
    opacity: 0,
    x: 2000,
    immediateRender: false
});

tl.from("#project-2", {
    scrollTrigger: {
        trigger: "#project-2",
        start: start_anim_project,
        end: end_anim_project,
        scrub: true,
    },
    scale: 0,
    opacity: 0,
    x: -2000,
    immediateRender: false
});


document.getElementById("contact-title").style.opacity = 0;
tl.to("#contact-title", {
    scrollTrigger: {
        trigger: "#contact-form",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
    },
    opacity: 1,
    immediateRender: false
});

tl.from("#contact-form", {
    scrollTrigger: {
        trigger: "#contact-form",
        start: "top bottom",
        end: end_anim_project,
        scrub: true,
    },
    opacity: 0,
    x: -600,
    immediateRender: false
});

document.getElementById("social-links").style.opacity = 0;
tl.to("#social-links", {
    scrollTrigger: {
        trigger: "#contact-form",
        start: "center bottom",
        end: end_anim_project,
        scrub: true,
    },
    opacity: 1,
    immediateRender: false
});



