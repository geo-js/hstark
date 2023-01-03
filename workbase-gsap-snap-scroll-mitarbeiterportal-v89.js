gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: ".snapscroll-container",
    markers: false
});

// at media above 991px
if (window.matchMedia("(min-width: 992px)").matches) {
$("#section-b").each(function (index) {
    let triggerElement = $(this);
    let targetElement1 = $(".scrolldown-wrapper");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top center",
            end: "bottom bottom",
            scrub: 0
        }
    });
    tl.fromTo(targetElement1, { opacity: 1, }, { opacity: 0, duration: 0.1 }, 0);
});

let textA = $("#indicator-text-a");
let textB = $("#indicator-text-b");
let textC = $("#indicator-text-c");
let textD = $("#indicator-text-d");
let textE = $("#indicator-text-e");
let textF = $("#indicator-text-f");
let textG = $("#indicator-text-g");
let textH = $("#indicator-text-h");


// Section 1 #section-a
$("#section-a").each(function (index) {
    let triggerElement = $(this);

    let targetActive = $("#indicator-a");
    let targetAfter = $("#indicator-b");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });

    // targetActive #indicator-a
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-b
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
        //#endregion
    tl.to(currentTextHover, { color: "#0b1d37", duration: 0.01 }, 0);

    //
    tl.to(textA,
        { className: "scroll-indicator-title-wrapper is-active", color: "#0b1d37", duration: 0.01 },
        0);

    tl.to(textB,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

});

// Section 2 #section-b
$("#section-b").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-a");
    let targetActive = $("#indicator-b");
    let targetAfter = $("#indicator-c");

    let navBar = $(".navbar_component-new");
    let scrollUp = $(".scrollup-wrapper");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-a
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-b
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-c
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);

    // toggle class is-outviewport to navBar
    tl.to(navBar,
        { className: "navbar_component-new is-outviewport", duration: 0.2 },
        0);

    // toggle class is-active to scrollUp
    tl.to(scrollUp,
        { className: "scrollup-wrapper is-active", duration: 0.2 },
        0);
    
    tl.to(currentTextHover, { color: "#0b1d37", duration: 0.01 }, 0);

    //
    tl.to(textA,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

    tl.to(textB,
        { className: "scroll-indicator-title-wrapper is-active", color: "#0b1d37", duration: 0.01 },
        0);
    
    tl.to(textC,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

});

// Section 3 #section-c
$("#section-c").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-b");
    let targetActive = $("#indicator-c");
    let targetAfter = $("#indicator-d");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-b
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-c
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-d
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);

    tl.to(currentTextHover, { color: "#0b1d37", duration: 0.01 }, 0);

    //
    tl.to(textB,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

    tl.to(textC,
        { className: "scroll-indicator-title-wrapper is-active", color: "#0b1d37", duration: 0.01 },
        0);
    
    tl.to(textD,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);
});

// Section 4 #section-d
$("#section-d").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-c");
    let targetActive = $("#indicator-d");
    let targetAfter = $("#indicator-e");

    let scrollUpIcon = $(".scrollup-icon");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-c
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-d
    tl.to(targetActive, 
        { backgroundColor: "rgba(255, 255, 255, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-e
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);

    // change color of scrollUpIcon
    tl.to(scrollUpIcon,
        { color: "rgba(255, 255, 255, 1)", duration: 0.2 },
        0);

    tl.to(currentTextHover, { color: "#ffffff", duration: 0.01 }, 0);

    //
    tl.to(textC,
        { className: "scroll-indicator-title-wrapper", color: "#ffffff", duration: 0.01 },
        0);

    tl.to(textD,
        { className: "scroll-indicator-title-wrapper is-active", color: "#ffffff", duration: 0.01 },
        0);
    
    tl.to(textE,
        { className: "scroll-indicator-title-wrapper", color: "#ffffff", duration: 0.01 },
        0);
});

// Section 5 #section-e
$("#section-e").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-d");
    let targetActive = $("#indicator-e");
    let targetAfter = $("#indicator-f");

    let scrollUpIcon = $(".scrollup-icon");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-d
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-e
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-f
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    
    // change color of scrollUpIcon
    tl.to(scrollUpIcon,
        { color: "rgba(59, 69, 85, 1)", duration: 0.2 },
        0);
    
    tl.to(currentTextHover, { color: "#0b1d37", duration: 0.01 }, 0);

    //
    tl.to(textD,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

    tl.to(textE,
        { className: "scroll-indicator-title-wrapper is-active", color: "#0b1d37", duration: 0.01 },
        0);
    
    tl.to(textF,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);
});

// Section 6 #section-f
$("#section-f").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-e");
    let targetActive = $("#indicator-f");
    let targetAfter = $("#indicator-g");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-e
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-f
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-g
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);

    tl.to(currentTextHover, { color: "#0b1d37", duration: 0.01 }, 0);

    //
    tl.to(textE,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

    tl.to(textF,
        { className: "scroll-indicator-title-wrapper is-active", color: "#0b1d37", duration: 0.01 },
        0);
    
    tl.to(textG,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);
});

// Section 7 #section-g
$("#section-g").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-f");
    let targetActive = $("#indicator-g");
    let targetAfter = $("#indicator-h");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-f
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-g
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-h
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);

    tl.to(currentTextHover, { color: "#0b1d37", duration: 0.01 }, 0);
    
    //
    tl.to(textF,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);

    tl.to(textG,
        { className: "scroll-indicator-title-wrapper is-active", color: "#0b1d37", duration: 0.01 },
        0);
    
    tl.to(textH,
        { className: "scroll-indicator-title-wrapper", color: "#0b1d37", duration: 0.01 },
        0);
});

// Section 8 #section-h
$("#section-h").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-g");
    let targetActive = $("#indicator-h");

    let scrollUpIcon = $(".scrollup-icon");

    let currentTextHover = $(".currentcolor");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "top center", scrub: 0 }
    });
    // targetBefore #indicator-g
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-h
    tl.to(targetActive, 
        { backgroundColor: "rgba(255, 255, 255, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    
    // change color of scrollUpIcon
    tl.to(scrollUpIcon,
        { color: "rgba(255, 255, 255, 1)", duration: 0 },
        0);

    tl.to(currentTextHover, { color: "#ffffff", duration: 0.01 }, 0);

    //
    tl.to(textG,
        { className: "scroll-indicator-title-wrapper", color: "#ffffff", duration: 0.01 },
        0);

    tl.to(textH,
        { className: "scroll-indicator-title-wrapper is-active", color: "#ffffff", duration: 0.01 },
        0);
});

// Section Footer
$("#section-h").each(function (index) {
    let triggerElement = $(this);
    let targetElement1 = $(".footer-holder");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top center",
            end: "bottom bottom",
            scrub: 0
        }
    });
    // 0 at end equals offset of 0 seconds, so it starts with the first timeline elemenet (targetElement1) 
      tl.fromTo(targetElement1, { opacity: 0, }, { opacity: 1, duration: 0.2 }, 0);
});
}
