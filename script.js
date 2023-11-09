var tl = gsap.timeline();

gsap.from("main h1",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1
})

gsap.from("header ul li",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1
})

gsap.from("header h1", {
    opacity:0,
    y:-100,
    duration:1,
    stagger:0.1,
})