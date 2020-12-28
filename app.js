
// INTRO
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text_intro  = intro.querySelector('h1');
const text_intro_2  = intro.querySelector('h1');

// OUTRO
const outro  = document.querySelector('.outro');
const text_outro = outro.querySelector('h1');

const controller = new ScrollMagic.Controller();

// SCENE 1
const scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller);

const text_intro_fade_out = TweenMax.fromTo(text_intro, 3, {opacity: 1}, {opacity: 0});

const scene_fade_out = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(text_intro_fade_out)
.addTo(controller);

// SCENE 2
const scene_2 = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: outro,
    triggerHook: 0
})
.setPin(outro)
.addTo(controller);

const text_outro_fade_in = TweenMax.fromTo(text_outro, 3, {opacity: 0}, {opacity: 1});

const scene_fade_in = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: outro,
    triggerHook: 0
})
.setTween(text_outro_fade_in)
.addTo(controller);