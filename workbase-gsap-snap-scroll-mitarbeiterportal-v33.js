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
            scrub: 1
        }
    });
    tl.fromTo(targetElement1, 
        {
            opacity: 1,
        }, 
        {
            opacity: 0,
            duration: 0.1
        }, 0);
});

// Section 1 #section-a
$("#section-a").each(function (index) {
    let triggerElement = $(this);

    let targetActive = $("#indicator-a");
    let targetAfter = $("#indicator-b");

    let textActive = $("#indicator-text-a");
    let textAfter = $("#indicator-text-b");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1 }
    });

    // targetActive #indicator-a
    tl.to(targetActive, 
        { backgroundColor: "rgba(11, 29, 55, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);
    // targetAfter #indicator-b
    tl.to(targetAfter,
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);

    // textActive #indicator-text-a
    tl.to(textActive,
        { opacity: 1, duration: 0.2 },
        0);
    // textAfter #indicator-text-b
    tl.to(textAfter,
        { opacity: 0, duration: 0.2 },
        0);
});

// Section 2 #section-b
$("#section-b").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-a");
    let targetActive = $("#indicator-b");
    let targetAfter = $("#indicator-c");

    let textBefore = $("#indicator-text-a");
    let textActive = $("#indicator-text-b");
    let textAfter = $("#indicator-text-c");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1 }
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

    
    // toggle class is-active to textActive
    tl.to(textActive,
        { className: "scroll-indicator-title-wrapper is-active", duration: 0.2 },
        0);
    // remove class is-active from textBefore and textAfter
    tl.to(textBefore,
        { className: "scroll-indicator-title-wrapper", duration: 0.2 },
        0);
    tl.to(textAfter,
        { className: "scroll-indicator-title-wrapper", duration: 0.2 },
        0);
});

// Section 3 #section-c
$("#section-c").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-b");
    let targetActive = $("#indicator-c");
    let targetAfter = $("#indicator-d");

    let textBefore = $("#indicator-text-b");
    let textActive = $("#indicator-text-c");
    let textAfter = $("#indicator-text-d");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1 }
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

    // textBefore #indicator-text-b
    tl.to(textBefore,
        { opacity: 0, duration: 0.2 },
        0);
    // textActive #indicator-text-c
    tl.to(textActive,
        { opacity: 1, duration: 0.2 },
        0);
    // textAfter #indicator-text-d
    tl.to(textAfter,
        { opacity: 0, duration: 0.2 },
        0);
});

// Section 4 #section-d
$("#section-d").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-c");
    let targetActive = $("#indicator-d");
    let targetAfter = $("#indicator-e");

    let textBefore = $("#indicator-text-c");
    let textActive = $("#indicator-text-d");
    let textAfter = $("#indicator-text-e");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1}
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

    // textBefore #indicator-text-c
    tl.to(textBefore,
        { opacity: 0, duration: 0.2 },
        0);
    // textActive #indicator-text-d
    tl.to(textActive,
        { opacity: 1, color: "#ffffff", duration: 0.2 },
        0);
    // textAfter #indicator-text-e
    tl.to(textAfter,
        { opacity: 0, duration: 0.2 },
        0);
});

// Section 5 #section-e
$("#section-e").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-d");
    let targetActive = $("#indicator-e");
    let targetAfter = $("#indicator-f");

    let textBefore = $("#indicator-text-d");
    let textActive = $("#indicator-text-e");
    let textAfter = $("#indicator-text-f");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1}
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
    
    // textBefore #indicator-text-d
    tl.to(textBefore,
        { opacity: 0, duration: 0.2 },
        0);
    // textActive #indicator-text-e
    tl.to(textActive,
        { opacity: 1, duration: 0.2 },
        0);
    // textAfter #indicator-text-f
    tl.to(textAfter,
        { opacity: 0, duration: 0.2 },
        0);
});

// Section 6 #section-f
$("#section-f").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-e");
    let targetActive = $("#indicator-f");
    let targetAfter = $("#indicator-g");

    let textBefore = $("#indicator-text-e");
    let textActive = $("#indicator-text-f");
    let textAfter = $("#indicator-text-g");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1}
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

    // textBefore #indicator-text-e
    tl.to(textBefore,
        { opacity: 0, duration: 0.2 },
        0);
    // textActive #indicator-text-f
    tl.to(textActive,
        { opacity: 1, duration: 0.2 },
        0);
    // textAfter #indicator-text-g
    tl.to(textAfter,
        { opacity: 0, duration: 0.2 },
        0);
});

// Section 7 #section-g
$("#section-g").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-f");
    let targetActive = $("#indicator-g");
    let targetAfter = $("#indicator-h");

    let textBefore = $("#indicator-text-f");
    let textActive = $("#indicator-text-g");
    let textAfter = $("#indicator-text-h");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1}
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

    // textBefore #indicator-text-f
    tl.to(textBefore,
        { opacity: 0, duration: 0.2 },
        0);
    // textActive #indicator-text-g
    tl.to(textActive,
        { opacity: 1, duration: 0.2 },
        0);
    // textAfter #indicator-text-h
    tl.to(textAfter,
        { opacity: 0, duration: 0.2 },
        0);
});

// Section 8 #section-h
$("#section-h").each(function (index) {
    let triggerElement = $(this);
    let targetBefore = $("#indicator-g");
    let targetActive = $("#indicator-h");

    let textBefore = $("#indicator-text-g");
    let textActive = $("#indicator-text-h");

    let tl = gsap.timeline({
        scrollTrigger: { trigger: triggerElement, start: "top center", end: "bottom bottom", scrub: 1}
    });
    // targetBefore #indicator-g
    tl.to(targetBefore, 
        { backgroundColor: "rgba(155, 158, 165, 1)", width: "0.125rem", opacity: 1, duration: 0.2 },
        0);
    // targetActive #indicator-h
    tl.to(targetActive, 
        { backgroundColor: "rgba(255, 255, 255, 1)", width: "0.25rem", opacity: 1, duration: 0.2 }, 
        0);

    // textBefore #indicator-text-g
    tl.to(textBefore,
        { opacity: 0, duration: 0.2 },
        0);
    // textActive #indicator-text-h
    tl.to(textActive,
        { opacity: 1, color: "#ffffff", duration: 0.2 },
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
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });
    // 0 at end equals offset of 0 seconds, so it starts with the first timeline elemenet (targetElement1) 
      tl.fromTo(targetElement1, 
      {
          opacity: 0,
      }, 
      {
          opacity: 1,
          duration: 0.05
      }, 0);
});

}
